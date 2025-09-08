import { NewsList } from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

type FilteredNewsPageProps = {
  params: { filter: number };
};

// kegunaan [[...filter]] -> file page.tsx yg ada di dalamnya akan aktif utk semua path segment setelah archive
// 0 segment -> /archive
// 1 segment -> /archive/2024
// 2 segment -> /archive/2024/three

// maka filter akan berisi array atas semua segment yang sesuai

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const { filter } = params;
  console.log(filter);

  const links = getAvailableNewsYears();
  // const news = getNewsForYear(filter);

  // return <NewsList news={news} />;
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
