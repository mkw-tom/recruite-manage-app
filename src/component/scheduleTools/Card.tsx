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
import { PostType } from "../../typs";
import EditForm from "./EditForm";

const Card = ({ card }: { card: PostType }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };


  return (
    <div className="bg-white rounded-md  lg:w-5/12 w-full  h-full mb-24 shadow-md relative">
      <EditForm open={open} setOpen={setOpen} post={card}/>
      <header className="flex justify-end bg-blue-900 h-6 rounded-t-md mb-3 items-center">
        <div className="group">
          <button className="relative" >
            <Settings className="text-white mr-1"></Settings>
          </button>
          <div
            className="hidden absolute right-2 -top-5 bg-white border-2 rounded-md z-10 group-hover:block"
          >
            <div className="flex py-3">
              <button className="flex px-5 text-red-900 hover:opacity-50">
                <Delete></Delete>
                <span className="ml-2">Delete</span>
              </button>
              <button className="flex border-r-2 px-7 text-blue-900 hover:opacity-50" onClick={toggle}>
                <Edit></Edit>
                <span className="ml-2">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-5">
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl md:text-xl ">{card.name}</h1>
            <p className="">{card.event}</p>
          </div>

          <div className="flex items-center ml-auto">
            <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
            <span>選考中</span>
          </div>
        </div>

        <div className="mt-5 bg-gray-100 p-2 rounded-sm">
          <ul className="flex flex-col gap-1">
            <li className="border-l-4 border-l-gray-900 pl-2 text-gray-900">
              開催地： {card.region}
            </li>
            <li className="flex items-center border-l-4 border-l-gray-900 pl-2 text-gray-900">
              開催日時：
              <span>{new Date(card.startDate).toLocaleString().slice(0, -3)}</span>
              <span className={`${card.endDate ? "block" : "hidden"} mx-2`}> 〜 </span>
              <span className={`${card.endDate ? "block" : "hidden"}`}>{new Date(card.endDate).toLocaleString().slice(0, -3)}</span>
            </li>
          </ul>
        </div>

        <Mypage card={card} />

        <Tasks card={card} />

        <div className="flex flex-col items-center mt-5 gap-5">
          <TaskDescription card={card} />

          <div className="flex w-full h-auto justify-end gap-3 ml-auto mt-5 md:mt-auto">
            <button className="w-2/6 h-10 bg-gray-500 text-white font-bold rounded-md">
              辞退
            </button>
            <button className="w-4/6 h-10 bg-green-500 text-white font-bold rounded-md">
              完了
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
