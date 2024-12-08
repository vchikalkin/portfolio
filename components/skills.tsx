import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('Skills');
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
