import { Badge } from './ui/badge';
import { useTranslations } from 'next-intl';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'GraphQL',
  'ESLint',
  'Tailwind',
  'MobX',
  'Node.js',
  'Docker',
  'MongoDB',
  'Redis',
  'JWT',
  'CI/CD',
];

export function Skills() {
  const t = useTranslations('Skills');
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">{t('title')}</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
