import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    const {name, image, description, stock, id} = producto
  return (
    <div className='card' style={{width:"18rem", margin:".5rem"}}>
    <img src={image}className="card-img-top" alt={name}></img>
    <div className='card-body'>
        <p className='card-text'>{name}</p>
        <p className='card-text'>{stock}</p>
        <p className='card-text'>{description}</p>
        <p className='card-text'><Link to={`/item/${id}`}>{id}</Link></p>
    </div>
    </div>
  )
}

export default Item;