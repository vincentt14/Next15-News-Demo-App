import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

type NewsDetailPageProps = {
  params: { slug: string };
};

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  console.log(params);
  console.log(slug);
  console.log(newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
