import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="flex w-full bg-blue-800 h-20 items-center justify-between pr-8 fixed top-0 z-50">
      <div className="flex items-center">
        <Sidebar />
        <h1 className="text-white ml-3 md:ml-8 font-bold md:text-xl">就活スケジュール管理</h1>
      </div>
      <div className="flex gap-3">
        <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300">
          ログイン
        </button>
        <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300">
          新規登録
        </button>
      </div>
    </div>
  );
};

export default Header;