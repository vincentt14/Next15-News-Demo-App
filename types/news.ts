export type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;   // bisa juga Date, tapi dari JSON biasanya string
  content: string;
};