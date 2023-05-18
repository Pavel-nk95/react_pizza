import Categories from '../components/Categories'
import Sort from '../components/Sort';
import Card from '../components/Card/Card';
import { Skeleton } from '../components/Card/Skeleton';

import { useState, useEffect } from 'react';

function Home() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');


    fetch(`https://6461e20e491f9402f4acbe7a.mockapi.io/items?${categoryId === 0 ? '' : `category=${categoryId}`}&sortBy=${sortBy}&order=${order}`).then((res) => {
      return res.json();
    }).then((arr) => { 
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
        <div className='container'>
          <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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


