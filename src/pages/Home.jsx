import Categories from '../components/Categories'
import Sort from '../components/Sort';
import Card from '../components/Card/Card';
import { Skeleton } from '../components/Card/Skeleton';

import { useState, useEffect } from 'react';

function Home() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6461e20e491f9402f4acbe7a.mockapi.io/items').then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
        <div className='container'>
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <Card key={obj.id} {...obj}/>)
            }
          </div>
          </div>
  );
}

export default Home;


