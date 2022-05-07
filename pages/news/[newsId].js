//our-domain.com/news/news-by-id
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  // console.log(router);
  console.log(newsId);

  return <h1>The Details Page</h1>;
}

export default DetailPage;
