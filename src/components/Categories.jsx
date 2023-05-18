import { useState } from 'react'

function Categories({ value, onClickCategory }) {

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul className='categoriesItems'>
        {categories.map((categoryName, index) => (<li key={index} className={value === index ? 'active' : ''} onClick={() => onClickCategory(index)}>{categoryName}</li>))}
      </ul>
    </div>
  );
}

export default Categories;