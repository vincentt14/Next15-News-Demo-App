import { NewsList } from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

type FilteredNewsPageProps = {
  params: { filter?: string[] };
};

// kegunaan [[...filter]] -> file page.tsx yg ada di dalamnya akan aktif utk semua path segment setelah archive
// 0 segment -> /archive
// 1 segment -> /archive/2024
// 2 segment -> /archive/2024/three

// maka filter akan berisi array atas semua segment yang sesuai

export default async function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const { filter } = await params;

  const selectedYear = filter?.[0] ? Number(filter[0]) : undefined;
  const selectedMonth = filter?.[1] ? Number(filter[1]) : undefined;

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if ((selectedYear !== undefined && !getAvailableNewsYears().includes(selectedYear)) || (selectedYear !== undefined && selectedMonth !== undefined && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))) {
    throw new Error("Invalid Filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
