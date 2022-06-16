function ItemNews(props) {
  return (
    <div className={`item-news-product ${props.item} `}>
      <div className="image-news">
        <a href="{}">
          <img src={props.image} alt="blog-1" />
        </a>
      </div>
      <div className="content-blog">
        <div className="date-post-blog">
          <span>
            <i className="fa-solid fa-calendar-check"></i> &nbsp; 08/08/21
          </span>
        </div>
        <div className="sample-article-blog">
          <div className="title-sample-article">
            <span>Bài Viết Mẫu 1</span>
          </div>
          <div className="content-sample-article">
            <p>
              You have to store fresh vegetables and fruits in order to eat
              fresh vegetables and fruits — that’...
            </p>
          </div>
        </div>
        <div className="more-preview-blog">
          <span>Xem thêm » </span>
        </div>
      </div>
    </div>
  );
}

export default ItemNews;
