import { useTranslations } from 'next-intl';

type CompanyProps = {
  readonly description: string;
  readonly href: string;
  readonly period: string;
  readonly title: string;
};

export function Work() {
  const t = useTranslations('Work');

  const companies: CompanyProps[] = [
    {
      description: t('sovcombanktech.description'),
      href: 'https://sovcombank.it/',
      period: t('sovcombanktech.period'),
      title: t('sovcombanktech.title'),
    },
    {
      description: t('evolution.description'),
      href: 'https://evoleasing.ru/',
      period: t('evolution.period'),
      title: t('evolution.title'),
    },
    {
      description: t('carcade.description'),
      href: 'https://carcade.com/',
      period: t('carcade.period'),
      title: t('carcade.title'),
    },
  ];

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">{t('experience')}</h2>
        {companies.map((company) => (
          <Company key={company.title} {...company} />
        ))}
      </div>
    </section>
  );
}

function Company({ description, href, period, title }: CompanyProps) {
  return (
    <div>
      <a href={href}>
        <div className="flex">
          <div className="grow flex-col items-center">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="text-sm font-medium leading-none">{title}</h3>
              <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
