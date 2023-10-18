import React from 'react'
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaBookmark, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import moment from 'moment';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className='mb-4'>
      <Card.Header className='d-flex align-items-center'>
        <Image style={{ height: "60px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1 ps-3">
          <h5>{author?.name}</h5>
          <p>{moment(author?.published_date).format('Do YYYY, h:mma')}</p>
        </div>
        <div className="d-flex">
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link
            to={`/news/${_id}`}

          >Read More</Link></>}
        </Card.Text>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1 d-flex align-items-center gap-2'>
            <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly />
            <span>{rating?.number}</span>
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default NewsCard
