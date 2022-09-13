import ItemNews from "./ItemNews/ItemNews";

function ListNews() {
  return (
    <div className="blog">
      <div className="nav-blog-product">
        <ItemNews image="https://file.hstatic.net/200000525857/article/frame_1_d23a5649648b4bc9b2ebcd350d088af2.jpg" />
        <ItemNews image="https://file.hstatic.net/1000409880/article/blog-img-4_bec9ca8e0929415d89459037db7e192f_large.jpg" />
        <ItemNews
          image="https://file.hstatic.net/200000525857/article/frame_2_4daac0fef8e34c2e8ee0fb2b957d5e5c_medium.jpg"
          item="item-mobile-1"
        />
        <ItemNews
          image="https://file.hstatic.net/1000409880/article/blog-img-6_29405cf96a364f69bde3da6f4906d039_large.jpg"
          item="item-mobile-2"
        />
      </div>
    </div>
  );
}

export default ListNews;
