import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/catagories")
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    console.log(catagories)
  return (
    <div>
      <h3>All Category</h3>
      {
        catagories.map(category => <p 
        key={category.id}
        >
            <Link to={`/category/${category.id}`} className='py-3 rounded px-5 text-decoration-none text-black fw-bold w-100 d-block bg-light my-3'>{category.name}</Link>

        </p>)
      }
    </div>
  )
}

export default LeftNav
