export interface Card {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  status: `single` | `divorcee`;
  occupation: `worker` | `study`;
  institution: string;
  father: string;
  mother: string;
  description: string;
  inquiries: Inquiries;
  matchmaker: Matchmaker;
}

export interface Inquiries {
  name: string;
  relationships: string;
  contact: string;
}

export interface Matchmaker {
  name: string;
  contact: string;
  rating: number;
}
