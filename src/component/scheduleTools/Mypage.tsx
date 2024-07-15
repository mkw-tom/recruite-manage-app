import { ArrowOutward, VisibilityOff, RemoveRedEye } from '@mui/icons-material';
import React, { useState } from 'react'

const Mypage = () => {
  const [idPassOpen, setIdPassOpen] = useState<boolean>(false);
  const idPassToggle = () => {
    setIdPassOpen(!idPassOpen)
  }

  return (
    <div className="flex gap-5 items-center bg-gray-100 rounded-sm p-2 mt-2">
    <a
      href="https://mui.com/material-ui/material-icons/"
      target="blank"
      className="bg-gray-500 text-white px-2 py-1 text-sm rounded-md flex items-center hover:opacity-40 duration-150"
    >
      <span className="mr-1">マイページ</span>
      <ArrowOutward className="text-sm"></ArrowOutward>
    </a>
    <div className="flex flex-col gap-1 items-start">
      <p><span>ID：</span>{idPassOpen ? (<span>aiueo</span>) : (<span>*****</span>)}</p>
      <p><span>Password：</span>{idPassOpen ? (<span>aiueo</span>) : (<span>*****</span>)}</p>
    </div>
    <button className="ml-auto px-3 bg-gray-00 opacity-70" onClick={idPassToggle}>
      {idPassOpen ? (<VisibilityOff></VisibilityOff>) : (<RemoveRedEye></RemoveRedEye>)}
    </button>
  </div>
  )
}

export default Mypage