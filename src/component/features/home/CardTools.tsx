import React from 'react';
import { usePosts } from '../../../state/context/PostsContext';
import CardDetail from '../cardDetail/CardDetail';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import CardList from '../cardList/CardList';
import EditPostForm from '../editPostForm/EditPostForm';
import CardDetailButtons from '../cardDetail/CardDetailButtons';

const CardTools = () => {
  const { posts } = usePosts();
  const { showDetail } = useSelectPost();
  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log('更新しました');
  // }, [selectPostTasks]);

  return (
    <div className="flex w-full h-auto flex-col md:flex-row box-border px-6 gap-2">
      {/* 企業編集フォーム */}
      <EditPostForm />
      {posts.length === 0 ? (
        <div className="md:w-1/2">
          <p>登録したデータがありません💦</p>
        </div>
      ) : (
        <div
          className={` flex-col w-ful h-auto hidden md:w-1/2 ${showDetail ? 'lg:flex ' : 'hidden'} `}
        >
          <CardDetailButtons />
          <div className="overflow-scroll pb-16" style={{ height: '700px' }}>
            <CardDetail />
          </div>
        </div>
      )}
      <CardList />
    </div>
  );
};

export default CardTools;
