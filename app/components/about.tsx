import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('About');
  return (
    <section id="about">
      <h2 className="text-xl font-bold">Обо мне</h2>
      <div className="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground">
        {t('summary')}
      </div>
    </section>
  );
}
