import NewsItems from './NewsItems'

function NewsGrid({items}) {
  return (
    <div className="news-grid">
      {items.map((item, i) =>(
        <NewsItems key={i} item={item}/>
      ))}
    </div>
  )
}

export default NewsGrid