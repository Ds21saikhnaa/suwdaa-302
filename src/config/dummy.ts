export const ProductDummy = {
  name: 'Mercedes-Benz GL-Class, 2020/2021',
  location: 'УБ — Хан-Уул, Хан-Уул, Хороо 1',
  createdAt: '2024-02-23T04:00:00.000Z',
  images: [
    'https://cdn1.unegui.mn/media/cache1/ae/df/aedf7a49809bb28b77e8dc26d9413e34.jpg',
    'https://cdn1.unegui.mn/media/cache1/36/0a/360a34d189b8c3555988e0fcfcc0d493.jpg',
    'https://cdn1.unegui.mn/media/cache1/b8/6e/b86e3ca795c81b0de8744ef373ab281b.jpg',
    'https://cdn1.unegui.mn/media/cache1/ae/2c/ae2cbc32bf2bba7bc7610a0e46170283.jpg',
  ],
  price: 250000000,
  user: {
    username: 'tulgaa',
    phone: '99110011',
    createdAt: '2023-02-20T04:00:00.000Z',
    socials: [{ type: 'FACEBOOK', link: 'https://www.facebook.com/' }],
  },
  attributes: [
    { name: 'Motor bagtaamj', value: '4.4l' },
    { name: 'Hvrd', value: 'Buruu' },
    { name: 'Hotlogch', value: 'Buh dugui 4wd' },
    { name: 'Ywsan', value: '24000km' },
    { name: 'Uildwerlesen on', value: '2023' },
    { name: 'Orj irsen on', value: '2024' },
  ],
  content: '<div>Aimar tereg bn awbal aw boliwol boli</div>',
  view: 30,
  suggestions: [1, 2, 3, 4, 5, 6],
};

type SideBarProp = {
  src: string;
  name: string;
};

export const SideBarData: SideBarProp[] = [
  {
    src: '/',
    name: 'Home',
  },
  {
    src: '/quiz',
    name: 'Questions',
  },
  {
    src: '/poem',
    name: 'Poem',
  },
  {
    src: '/surprise',
    name: 'Surprise',
  },
];
