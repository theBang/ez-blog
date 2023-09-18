export interface Post {
  id: number,
  title: string,
  href: string,
  description: string,
  date: string,
  datetime: string,
  category: Category,
  author: Author,
}

export interface Author {
  name: string,
  role: string,
  href: string,
  imageUrl: string,
}

export interface Category {
  title: string,
  href: string
}