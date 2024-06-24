import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="flex w-full bg-sky-500 h-20 items-center justify-between pr-8">
      <div className="flex items-center">
        <Sidebar />
        <h1 className="text-white ml-3 md:ml-8 font-bold md:text-xl">就活スケジュール管理</h1>
      </div>
      <div className="flex gap-3">
        <button className="bg-white rounded-md text-sky-500 px-3 py-2 hover:opacity-80 duration-300">
          ログイン
        </button>
        <button className="bg-white rounded-md text-sky-500 px-3 py-2 hover:opacity-80 duration-300">
          新規登録
        </button>
      </div>
    </div>
  );
};

export default Header;