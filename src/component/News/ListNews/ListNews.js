import ItemNews from "./ItemNews/ItemNews";

function ListNews() {
  return (
    <div className="blog">
      <div className="nav-blog-product">
        <ItemNews image="https://file.hstatic.net/200000389561/article/b5-min_1024x1024_037a2688e34a47398928e4e934893f28_large.jpg" />
        <ItemNews image="https://file.hstatic.net/200000389561/article/b4-min_1024x1024_6676a790c4834bc4b5c82f91abff6cf3_large.jpg" />
        <ItemNews
          image="https://file.hstatic.net/200000389561/article/blog5_grande_0fb4c00285a64db59a6deab3bf81da93_large.jpg"
          item="item-mobile-1"
        />
        <ItemNews
          image="https://file.hstatic.net/200000389561/article/b1-min_1024x1024_a53628be99c04f71a9f72fb8c765db1c_large.jpg"
          item="item-mobile-2"
        />
      </div>
    </div>
  );
}

export default ListNews;
