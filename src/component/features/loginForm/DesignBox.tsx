import DesignCard from './DesignCard';
import { CheckCircle } from '@mui/icons-material';

const DesignBox = () => {
  const datas = [
    { task: '説明会・オープンカンパニー', situation: '結果待ち' },
    { task: 'インターン短期', situation: '内定・参加確定' },
    { task: 'インターン長期', situation: '通過' },
    { task: 'ハッカソン', situation: '未完了' },
  ];

  const taskJudge = (situation: string) => {
    switch (situation) {
      case '未完了':
        return <p className="w-2 h-2 bg-gray-200 rounded-full mr-1"></p>;
      case '結果待ち':
        return (
          <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full mr-1"></p>
        );
      case '通過':
        return (
          <CheckCircle
            className="text-green-500 w-2 h-2 mr-1"
            style={{ fontSize: '8px' }}
          ></CheckCircle>
        );
      // eslint-disable-next-line no-duplicate-case
      case '内定・参加確定':
        return (
          <CheckCircle
            className="text-orange-500 w-2 h-2 mr-1"
            style={{ fontSize: '8px' }}
          ></CheckCircle>
        );
    }
  };

  return (
    <div className="bg-gray-100 w-4/5 h-96 rounded-md shadow-xl mx-auto relative overflow-hidden mt-24">
      <header className="flex h-8 bg-blue-800 rounded-t-md items-center px-1 text-white">
        {/* <List
          className="ml-1 text-white"
          style={{ fontSize: '10px', display: 'block' }}
        /> */}
        <small className="ml-5" style={{ fontSize: '10px' }}>
          Smart就活管理
        </small>
        <div className="flex ml-auto gap-2">
          <ul
            className="flex gap-1 items-center mr-3"
            style={{ fontSize: '6px' }}
          >
            <li>Home</li>
            <li>Profile</li>
            <li>ES管理</li>
          </ul>
          <div
            className="bg-white w-8 h-4 rounded-sm text-blue-900 pt-1 mr-1 text-center"
            style={{ fontSize: '5px' }}
          >
            ログアウト
          </div>
        </div>
      </header>
      <div className="flex w-full ">
        <DesignCard />
        <div className="flex flex-col w-1/2 mx-2">
          <div className="w-full h-auto flex justify-end mt-3 gap-1 mb-2">
            <button className="rounded-xl w-1/3 h-3 bg-blue-700 shadow-sm"></button>
            <button className="rounded-xl w-2/3 h-3 bg-gray-300 shadow-sm"></button>
          </div>
          <div className="flex flex-col gap-1">
            {datas.map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-3 shadow-md border-l-2 border-l-blue-800 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <h1 style={{ fontSize: '10px' }}>株式会社-------</h1>
                  <p style={{ fontSize: '6px' }}>{data.task}</p>
                </div>
                <div className="flex ml-auto">
                  {taskJudge(data.situation)}
                  <p style={{ fontSize: '6px' }}>{data.situation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBox;
