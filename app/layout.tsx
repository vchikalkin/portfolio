import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default async function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          inter.className,
          'mx-auto min-h-screen max-w-2xl bg-background md:px-6 md:py-12 antialiased',
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
            // forcedTheme="dark"
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
