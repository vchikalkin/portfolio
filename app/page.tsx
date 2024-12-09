import { About } from '@/components/about';
import { Contacts } from '@/components/contacts';
import { Person } from '@/components/person';
import { Skills } from '@/components/skills';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { Work } from '@/components/work';
import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  return (
    <main>
      <NeonGradientCard neonColors={{ firstColor: '#ae00ff2b', secondColor: '#0011ff55' }}>
        <div className="flex flex-col justify-between gap-y-5">
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
