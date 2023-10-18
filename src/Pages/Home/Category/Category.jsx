import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hocks/useTitle';

const Category = () => {
  useTitle('Category')
    const {id} = useParams();
    const newCategory = useLoaderData();
  return (
    <div>
     {id &&  <h2>This category : {newCategory.length}</h2>}
      {
        newCategory.map(news => <NewsCard
        key={news._id}
        news={news}
        ></NewsCard>)
      }
    </div>
  )
}

export default Category
