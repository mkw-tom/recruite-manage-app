import { AddCircle, BusinessOutlined, CalendarMonth, FormatOverlineSharp, OpenInBrowserTwoTone } from "@mui/icons-material";
import React, { useRef } from "react";
import TaskForm from "./TaskForm";
import CompanyEventForm from "./CompanyEventForm";

type OpenProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


// export const textOptions = [
//   "SPI3",
//   "玉手箱Ⅲ",
//   "Web-GAB",
//   "C-GAB",
//   "CAB",
//   "3Eテスト",
//   "その他"
// ]

const AddFrom = ({ open, setOpen }: OpenProps) => {

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0  overflow-y-auto bg-opacity-40 bg-gray-900 z-50`} style={{ display: open ? "block" : "none" }}
    >
      <div
        className="bg-white w-11/12 h-auto shadow-xl rounded-md z-30  mx-auto mt-3 p-8"
      >
        <div className="flex justify-between">
          <h1 className="text-2xl text-blue-600 font-bold flex items-center gap-3">
            <BusinessOutlined style={{fontSize : "33px"}}/>
            <span>企業を追加</span>
          </h1>
          <button onClick={() => setOpen(!open)}>閉じる</button>
        </div>
        <form className="flex flex-col lg:flex-row mt-5 ml-3 gap-5">
          <CompanyEventForm />
          <hr className="lg:hidden"/>

          <TaskForm />
          
        </form>
        <button className="flex bg-orange-500 items-center justify-center rounded-md text-white w-3/12 h-12 mt-5 ml-auto hover:opacity-50">
          <span className="text-lg mr-2">追加</span><AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default AddFrom;
