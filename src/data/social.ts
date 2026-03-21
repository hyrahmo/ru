export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socials: SocialLink[] = [
  // Русскоязычные
  { name: 'Telegram', url: 'https://t.me/hyrahmoru', icon: 'simple-icons:telegram' },
  { name: 'ВКонтакте', url: 'https://vk.com/hyrahmoru', icon: 'simple-icons:vk' },
  { name: 'YouTube', url: 'https://youtube.com/@hyrahmoru', icon: 'simple-icons:youtube' },
  { name: 'Instagram', url: 'https://instagram.com/hyrahmoru', icon: 'simple-icons:instagram' },
  // Англоязычные
  { name: 'GitHub', url: 'https://github.com/hyrahmo', icon: 'simple-icons:github' },
  { name: 'X', url: 'https://x.com/hyrahmo', icon: 'simple-icons:x' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hyrahmo', icon: 'simple-icons:linkedin' },
  { name: 'Discord', url: 'https://discord.gg/hyrahmo', icon: 'simple-icons:discord' },
];
