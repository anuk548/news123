function NewsItems({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split('https://').pop().split('/')[0];

  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ');
  const formateTime = formatDate.replace('Z', '');

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img src={`https://www.google.com/s2/favicons?domain=${website}`} alt={website} />
          <span>{website}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>published At :</b> {formateTime}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItems;
