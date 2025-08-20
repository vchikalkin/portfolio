/* eslint-disable id-length */
import { useTranslations } from 'next-intl';

type ProjectProps = {
  readonly description: string;
  readonly href?: string;
  readonly technologies: string[];
  readonly title: string;
};

export function Projects() {
  const t = useTranslations('Projects');

  const projects: ProjectProps[] = [
    {
      description: t('zapishis_online_bot.description'),
      href: 'https://t.me/zapishis_online_bot',
      technologies: [
        'Next.js',
        'Strapi',
        'PostgreSQL',
        'Telegraf.js',
        'Tailwind CSS',
        'Telegram Mini App',
      ],
      title: t('zapishis_online_bot.title'),
    },
    {
      description: t('portfolio.description'),
      href: 'https://vchikalkin.dev',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n', 'Dark/Light Theme'],
      title: t('portfolio.title'),
    },
    {
      description: t('next_downloader_bot.description'),
      href: 'https://t.me/next_downloader_bot',
      technologies: ['Grammy.js', 'Redis', 'TikTok API', 'FFmpeg'],
      title: t('next_downloader_bot.title'),
    },
    {
      description: t('eslint_config.description'),
      href: 'https://github.com/vchikalkin/eslint-config-awesome',
      technologies: ['ESLint', 'TypeScript', 'Next.js', 'React', 'Node.js'],
      title: t('eslint_config.title'),
    },
  ];

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">{t('title')}</h2>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function Project({ description, href, technologies, title }: ProjectProps) {
  const content = (
    <div>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <div className="flex">
          <div className="grow flex-col items-center">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="text-sm font-medium leading-none">{title}</h3>
              <div className="text-right text-xs text-muted-foreground sm:text-sm">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {technologies.length} tech
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <span
                  className="inline-flex items-center rounded-full bg-primary/5 px-2 py-1 text-xs font-medium text-primary/70"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );

  return content;
}
