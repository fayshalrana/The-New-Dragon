import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'

const News = () => {
  const newsDetails = useLoaderData();
  const {image_url, title, details, category_id} = newsDetails;
  return (
    <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={image_url}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {details}
      </Card.Text>
     <Link className='text-decoration-none' to={`/category/${category_id}`}> <Button variant="danger" className='d-flex gap-2 align-items-center '><FaArrowLeft></FaArrowLeft>All news in this category</Button></Link>
    </Card.Body>
  </Card>
  )
}

export default News
