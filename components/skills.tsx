import { Badge } from './ui/badge';

const skills = [
  'React',
  'Next.js',
  'Typescript',
  'GraphQL',
  'ESLint',
  'Tailwind',
  'MobX',
  'Node.js',
  'Docker',
  'MongoDB',
  'Redis',
  'JWT',
];

export function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
