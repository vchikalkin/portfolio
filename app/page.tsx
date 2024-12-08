import { About } from '@/components/about';
import { Contacts } from '@/components/contacts';
import { Person } from '@/components/person';
import { Skills } from '@/components/skills';
import { Work } from '@/components/work';
import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Parameters = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params: { locale } }: Parameters): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col space-y-10">
      <Person />
      <About />
      <Work />
      <Skills />
      <Contacts />
    </main>
  );
}
