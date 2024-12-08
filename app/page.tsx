import { About } from '@/components/about';
import { Contacts } from '@/components/contacts';
import { Person } from '@/components/person';
import { Skills } from '@/components/skills';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
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
    <main className="">
      <NeonGradientCard neonColors={{ firstColor: '#ae00ff2b', secondColor: '#0011ff55' }}>
        <div className="flex flex-col justify-between gap-y-5 bg-white/30 backdrop-blur-sm ">
          <Person />
          <About />
          <Work />
          <Skills />
          <Contacts />
        </div>
      </NeonGradientCard>
    </main>
  );
}
