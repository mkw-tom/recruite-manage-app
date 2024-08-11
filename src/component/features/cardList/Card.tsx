import { CheckCircle } from '@mui/icons-material';
import React from 'react';
import { PostType } from '../../../types/typs';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import useSituationJudge from '../../../hooks/useSituationJudge';

const Card = ({ card }: { card: PostType }) => {
  const currentTask = card?.taskFlow?.find((task) => task.current === true);
  const { fetchSelectPosts, selectPost, setShowDetail, current } =
    useSelectPost();
  const taskJudge = useSituationJudge();
  const handleSelectPost = (postId: string) => {
    fetchSelectPosts(postId);
    setShowDetail(true);
  };

  return (
    <button onClick={() => handleSelectPost(card.customId as string)}>
      <div
        className={`flex items-center relative shadow-md p-4  border-l-8 border-l-blue-900 rounded-xl ${selectPost?.customId === card.customId ? 'bg-blue-100' : 'bg-white '}`}
      >
        <div className="flex flex-col gap-1">
          {/* <input type="radio" className="w-3 h-3" /> */}
          <h1 className="font-bold text-xl text-start pl-4">{card.name}</h1>
          <p className="ml-4 mt-1">{card.event}</p>
        </div>

        {card?.completed ? (
          <div className="flex items-center ml-auto">
            <CheckCircle className="text-orange-500 w-4 h-4 mr-1 "></CheckCircle>
            <span className="font-bold">内定・参加確定</span>
          </div>
        ) : (
          <div className="flex items-center ml-auto">
            {(currentTask?.customId as string) === current?.customId
              ? taskJudge(current?.situation as string)
              : taskJudge(currentTask?.situation as string)}
            {/* {taskJudge(currentTask?.situation as string)} */}
            <span className="font-bold ml-1">
              {(currentTask?.customId as string) === current?.customId
                ? current?.situation
                : currentTask?.situation}
            </span>
          </div>
        )}
      </div>
    </button>
  );
};

export default Card;
