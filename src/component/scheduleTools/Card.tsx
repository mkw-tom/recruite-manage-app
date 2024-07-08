"use client";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  ArrowRight,
  Delete,
  Edit,
  Settings,
  ArrowOutward,
  Description,
} from "@mui/icons-material";
import { List } from "@mui/material";
import TaskDescription from "./TaskDescription";
import Tasks from "./Tasks";

const Card = ({ card }: { card: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white rounded-md w-full h-auto mb-10 shadow-xl relative">
      <header className="flex justify-end bg-blue-900 h-6 rounded-t-md mb-3 items-center">
        <button className=" elative" onClick={toggle} onBlur={toggle}>
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
          <div className="md:flex md:gap-9 md items-center">
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

        <div className="flex gap-5 bg-gray-100 rounded-sm p-2 mt-2">
          <a
            href="https://mui.com/material-ui/material-icons/"
            target="blank"
            className="bg-gray-500 text-white px-2 py-1 text-sm rounded-md flex items-center hover:opacity-40 duration-150"
          >
            <span className="mr-1">マイページへ移動</span>
            <ArrowOutward className="text-sm"></ArrowOutward>
          </a>
          <ul className="md:flex md:gap-10 md:items-center ">
            <li className="mb-1 md:mb-0">
              ID: <span>abcd1111</span>
            </li>
            <li className="">
              Password: <span>yrut8559</span>
            </li>
          </ul>
        </div>

        <Tasks />

        <div className="md:flex items-center mt-5">
          <TaskDescription />

          <div className="flex md:w-5/12 h-auto justify-end gap-3 ml-auto mt-5 md:mt-auto">
            <button className="w-2/6 h-8 bg-red-800 text-white font-bold rounded-md">
              不合格
            </button>
            <button className="w-4/6 h-8 bg-orange-500 text-white font-bold rounded-md">
              完了
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Card;
