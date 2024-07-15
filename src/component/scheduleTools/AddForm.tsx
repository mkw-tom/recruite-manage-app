import {
  AddCircle,
  BusinessOutlined,
  CalendarMonth,
  FormatOverlineSharp,
  OpenInBrowserTwoTone,
  SignLanguage,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import TaskForm from "./TaskForm";
import CompanyEventForm from "./CompanyEventForm";
import { calculateOverrideValues } from "next/dist/server/font-utils";

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
  const [translateY, setTranslateY] = useState<string>("")

  const slide = () => {
    setTranslateY("-translate-x-1/2 transition ease-out")
  }

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50`}
      style={{ display: open ? "block" : "none" }}
    >
      <div className="w-11/12 mx-auto rounded-md overflow-hidden">
        <div className={`bg-white w-full h-auto mt-36  ${translateY}`} style={{width : "calc(100% * 2)"}}>
          <div className="w-full h-auto">
            {/* <div className="flex justify-between">
            <h1 className="text-2xl text-blue-600 font-bold flex items-center">
              <BusinessOutlined style={{ fontSize: "33px" }} />
              <span>企業を追加</span>
            </h1>
            <button onClick={() => setOpen(!open)}>閉じる</button>
            </div> */}

            <div className="flex w-full h-full">
              <CompanyEventForm translateY={translateY} setTranslateY={setTranslateY}/>
              {/* <hr className="lg:hidden" /> */}
              <CompanyEventForm translateY={translateY} setTranslateY={setTranslateY}/>
            </div>

            {/* <button className="flex bg-orange-500 items-center justify-center rounded-md text-white w-3/12 h-12 mt-5 ml-auto hover:opacity-50 " onClick={slide}>
              <span className="text-lg mr-2">追加</span>
              <AddCircle></AddCircle>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFrom;
