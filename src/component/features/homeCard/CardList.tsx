import React, { useEffect } from 'react';
import Card from './Card';
import { usePosts } from '../../../state/context/PostsContext';
import { useAuth } from '../../../state/context/AuthContext';

const CardList = () => {
  const { user } = useAuth();
  const { posts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts(user?._id as string);
  }, [fetchPosts, user]);

  return (
    <ul className="w-full h-auto flex flex-wrap justify-around mx-auto px-5">
      {posts?.map((card, index) => <Card key={index} card={card} />)}
    </ul>
  );
};

export default CardList;
