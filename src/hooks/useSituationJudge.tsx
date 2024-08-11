import { CheckCircle } from '@mui/icons-material';
import React, { useCallback } from 'react';

const useSituationJudge = () => {
  const taskJudge = useCallback((situation: string) => {
    switch (situation) {
      case '未完了':
        return <p className="w-5 h-5 bg-gray-400 rounded-full my-2"></p>;
      case '結果待ち':
        return (
          <p className="w-5 h-5 bg-green-500 animate-pulse rounded-full my-2"></p>
        );
      case '通過':
        return (
          <CheckCircle className="text-green-500 w-4 h-4 my-1"></CheckCircle>
        );
    }
  }, []);
  return taskJudge;
};

export default useSituationJudge;
