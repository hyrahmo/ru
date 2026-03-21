export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// TODO: Дима подскажет конкретные ссылки
export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/hyrahmo', icon: 'simple-icons:github' },
  { name: 'Telegram', url: 'https://t.me/hyrahmo', icon: 'simple-icons:telegram' },
  { name: 'X', url: 'https://x.com/hyrahmo', icon: 'simple-icons:x' },
];
