import { icons } from './icons';
import { useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';

type ContactType = {
  readonly href: string;
  readonly image: {
    className?: string;
    src: StaticImageData;
  };
  readonly title: string;
};

const contacts: ContactType[] = [
  {
    href: 'https://t.me/vchikalkin',
    image: {
      src: icons.Telegram,
    },
    title: 'Telegram',
  },
  {
    href: 'https://github.com/vchikalkin',
    image: {
      className: 'dark:invert',
      src: icons.Github,
    },
    title: 'GitHub',
  },
  {
    href: 'mailto:i@vchikalkin.ru',
    image: {
      className: 'dark:invert',
      src: icons.Email,
    },
    title: 'Email',
  },
  {
    href: 'https://www.instagram.com/v.chikalkin/',
    image: {
      src: icons.Instagram,
    },
    title: 'Instagram',
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
          <Image alt={title} height={24} width={24} {...image} />
          <h3 className="text-sm font-medium leading-none">{title}</h3>
        </div>
      </a>
    </div>
  );
}
