import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const {user, logOut} = useAuth()
  return (
    <div className="flex w-full bg-blue-800 h-20 items-center justify-between pr-8 fixed top-0 z-20">
      <div className="flex items-center">
        {user ? <Sidebar /> : <div className="w-16"></div>}
        <h1 className="text-white ml-3 md:ml-8 font-bold md:text-xl">
          Smart就活管理
        </h1>
      </div>
      <div className="flex gap-3">
        {user ? (
            <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300" onClick={logOut}>
              ログアウト
            </button>
        ) : (
          <></>
        )}

        {/* <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300">
          新規登録
        </button> */}
      </div>
    </div>
  );
};

export default Header;
