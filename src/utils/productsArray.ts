export type productListItem = {
  id: number;
  title: string;
  desc: string;
  price: number;
};

export const productsArray: productListItem[] = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    desc: "This is desc 14 pro",
    price: 1200,
  },
  {
    id: 2,
    title: "iPhone 12",
    desc: "Desc 12",
    price: 1000,
  },
  {
    id: 3,
    title: "iPhone 11 Pro",
    desc: "This is desc 11 pro",
    price: 900,
  },
];
