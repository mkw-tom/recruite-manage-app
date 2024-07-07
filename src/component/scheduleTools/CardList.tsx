import React from 'react'
import Card from './Card'

const CardList = () => {
  const cardList: string[] = ["株式会社freee", "株式会社エイチーム", "株式会社aaa"]
  return (
    <ul className='w-11/12 h-auto flex-col  mx-auto'>
      {cardList.map((card: string, index) => (<Card key={index} card={card}/>))}
    </ul>
  )
}

export default CardList