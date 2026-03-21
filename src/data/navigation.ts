export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Проекты', href: '/projects/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Обо мне', href: '/about/' },
];
