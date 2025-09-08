import { News } from "@/types/news";
import Link from "next/link";

type NewsListProps = {
  news: News[];
};

export function NewsList({ news }: NewsListProps) {
  return (
    <ul className="news-list">
      {news.map((newsItem: News) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
