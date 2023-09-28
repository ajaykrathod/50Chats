import React from 'react'

function Card({className,src,title,text}) {
  return (
    <div className={className}>
        <img src={src}/>
        <h2>{title}</h2>
        <h3>{text}</h3>
    </div>
  )
}

export default Card