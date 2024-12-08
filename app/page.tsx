import { About } from '@/components/about';
import { Contacts } from '@/components/contacts';
import { Person } from '@/components/person';
import { Skills } from '@/components/skills';
import { Work } from '@/components/work';

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
