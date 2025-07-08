# syntax=docker/dockerfile:1.4

# Указываем версию Node.js
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS base

# Устанавливаем необходимые пакеты
RUN apk add --no-cache libc6-compat openssl

# Настройка PNPM
ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
RUN corepack enable && corepack prepare pnpm@latest --activate

# Установка зависимостей
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Сборка проекта
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm run build

# Production-слой
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Создание пользователя
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
