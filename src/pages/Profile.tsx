import React from 'react';
import avatar from '../assets/noAvatar.png';
import { Person2 } from '@mui/icons-material';

const Profile = () => {
  return (
    <div className="w-full h-auto">
      <div className="mt-24"></div>
      <div className="w-96 h-full bg-white shadow-md rounded-md  mx-auto p-8 ">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center mb-10">
            <Person2 style={{ fontSize: '33px' }}></Person2>
            <span>プロフィール編集</span>
          </h1>
          <img
            src={avatar}
            alt=""
            className="w-2/5 h-auto rounded-full border-4 border-blue-800"
          />
          <p className="text-xl font-bold my-5">トム</p>
          <button className="w-56 h-10 bg-gray-600 rounded-md text-white relative">
            画像を変更
            <input
              type="file"
              name=""
              id=""
              className="w-56 h-10 absolute top-0 left-0 opacity-100"
            />
          </button>
          <button>名前を変更</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
