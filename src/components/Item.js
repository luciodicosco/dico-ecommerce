import React from 'react'

const Item = (producto) => {
    const {name, img, description} = producto
  return (
    <div className='card' style={{width:"18rem", margin:".5rem"}}>
    <img src={img}className="card-img-top" alt={name}></img>
    <div className='card-body'>
        <p className='card-text'>{name}</p>
        <p className='card-text'>{description}</p>
    </div>
    </div>
  )
}

export default Item;