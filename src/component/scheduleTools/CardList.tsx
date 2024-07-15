import React from 'react'
import Card from './Card'

const CardList = () => {
  const cardList: string[] = ["株式会社AAA", "株式会社BBB", "株式会社CCC", "株式会社DDD"]
  return (
    <ul className='w-full h-auto flex flex-wrap justify-around mx-auto px-5'>
      {cardList.map((card: string, index) => (<Card key={index} card={card}/>))}
    </ul>
  )
}

export default CardList