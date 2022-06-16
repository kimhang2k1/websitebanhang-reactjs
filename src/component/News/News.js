import ListNews from "./ListNews/ListNews";
import TittleNews from "./TittleNews/TittleNews";

function News() {
  return (
    <div className="news-of-product">
      <div className="list-news-product">
        <TittleNews />
        <ListNews />
      </div>
    </div>
  );
}

export default News;
