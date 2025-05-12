export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  instructor: string;
  medium: string;
  price: number;
  rating: number;
  students: number;
  payLink: string;
  demo: string;
  tagLine: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}