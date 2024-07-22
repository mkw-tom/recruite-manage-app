import React, { useEffect, useState } from 'react'
import Card from './Card'
import { api } from '../../axios'
import { PostType } from '../../typs'
import { usePosts } from '../../context/PostsContext'
import { useAuth } from '../../context/AuthContext'


const CardList = () => {
  const { user } = useAuth()
  const { posts, fetchPosts } = usePosts()

  useEffect(() => {
    fetchPosts(user?._id!)
  }, [user])

  return (
    <ul className='w-full h-auto flex flex-wrap justify-around mx-auto px-5'>
      {posts?.map((card, index) => (<Card key={index} card={card}/>))}
    </ul>
  )
}

export default CardList