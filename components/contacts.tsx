import { icons } from './icons';
import { useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';

type ContactType = {
  readonly href: string;
  readonly image: StaticImageData;
  readonly title: string;
};

const contacts: ContactType[] = [
  {
    href: 'https://t.me/vchikalkin',
    image: icons.Telegram,
    title: 'Telegram',
  },
  {
    href: 'https://github.com/vchikalkin',
    image: icons.Github,
    title: 'GitHub',
  },
  {
    href: 'mailto:i@vchikalkin.ru',
    image: icons.Email,
    title: 'Email',
  },
];

export function Contacts() {
  const t = useTranslations('Contact');

  return (
    <section id="contact">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">{t('title')}</h2>
        <div className="flex items-center gap-x-6">
          {contacts.map((contact) => (
            <Contact key={contact.title} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ href, image, title }: ContactType) {
  return (
    <div>
      <a href={href}>
        <div className="flex items-center gap-x-1">
          <Image alt={title} height={24} src={image} width={24} />
          <h3 className="text-sm font-medium leading-none">{title}</h3>
        </div>
      </a>
    </div>
  );
}
