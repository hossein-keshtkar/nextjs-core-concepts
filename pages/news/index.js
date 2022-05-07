//our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/world-news">World News</Link>
        </li>
        <li>
          <Link href="/news/internal-news">News About Our Contery</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
