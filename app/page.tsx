import { About } from './components/about';
import { Person } from './components/person';

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col space-y-10">
      <Person />
      <About />
    </main>
  );
}
