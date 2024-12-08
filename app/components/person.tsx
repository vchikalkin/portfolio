import { useTranslations } from 'next-intl';

export function Person() {
  const t = useTranslations('Person');
  return (
    <section id="person">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {t('hello')}
            </span>
            <span className="max-w-[600px] md:text-xl">{t('description')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
