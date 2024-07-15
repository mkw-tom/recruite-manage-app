"use client";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {

  Delete,
  Edit,
  Settings,
  ArrowOutward,
  Description,
  RemoveRedEye,
  VisibilityOff,
} from "@mui/icons-material";
import { List } from "@mui/material";
import TaskDescription from "./TaskDescription";
import Tasks from "./Tasks";
import Mypage from "./Mypage";



const Card = ({ card }: { card: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  

  const toggle = () => {
    setOpen(!open)
  }



  return (
    <div className="bg-white rounded-md  lg:w-5/12 w-full  h-full mb-24 shadow-md relative">
      <header className="flex justify-end bg-blue-900 h-6 rounded-t-md mb-3 items-center">
        <button className=" elative" onClick={toggle} onBlur={toggle} >
          <Settings className="text-white mr-1"></Settings>
        </button>
        <div
          className="hidden absolute right-8 bg-white border-2 rounded-md z-10"
          style={{ display: open ? "block" : "none" }}
        >
          <div className="flex py-3">
            <button className="flex border-r-2 px-7 text-blue-900 hover:opacity-50">
              <Edit></Edit>
              <span className="ml-2">Edit</span>
            </button>
            <button className="flex px-5 text-red-900 hover:opacity-50">
              <Delete></Delete>
              <span className="ml-2">Delete</span>
            </button>
          </div>
        </div>
      </header>

      <main className="p-5">
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl md:text-xl ">{card}</h1>
            <p className="">インターン短期</p>
          </div>

          <div className="flex items-center ml-auto">
            <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
            <span>選考中</span>
          </div>
        </div>

        <div className="mt-5 bg-gray-100 p-2 rounded-sm">
          <ul className="flex flex-col gap-1">
            <li className="border-l-4 border-l-gray-900 pl-2 text-gray-900">
              開催地：東京
            </li>
            <li className="border-l-4 border-l-gray-900 pl-2 text-gray-900">
              開催日時：7/10 ~ 7/20
            </li>
          </ul>
        </div>

        <Mypage />

        <Tasks />

        <div className="flex flex-col items-center mt-5 gap-5">
          <TaskDescription />

          <div className="flex w-full h-auto justify-end gap-3 ml-auto mt-5 md:mt-auto">
            <button className="w-2/6 h-10 bg-red-800 text-white font-bold rounded-md">
              不合格
            </button>
            <button className="w-4/6 h-10 bg-orange-500 text-white font-bold rounded-md">
              通過
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Card;
