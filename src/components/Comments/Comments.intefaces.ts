interface CardComment {
  comment: string;
  name: string;
  img: string;
  country: string;
  role: string;
  company: string;
  time: string;
}

interface Coments {
  title: string;
  comments: CardComment[];
}
