import React, { useEffect, useState}  from 'react';
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import Footer from './components/Footer';


function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=49e8855d1ab54c579768387c4699024b`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return (
    <div className="App">
      <h1 className='title'>News Network</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items}/>
      <Footer/>
    </div>
  );
}

export default App;
