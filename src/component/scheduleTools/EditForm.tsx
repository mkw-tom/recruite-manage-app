import {
  AddCircle,
  ArrowBack,
  Cancel,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import TaskForm from "../addForm/TaskForm";
import CompanyEventForm from "../addForm/CompanyEventForm";
import { calculateOverrideValues } from "next/dist/server/font-utils";
import { PostType } from "../../typs";

type EditFormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  post: PostType;
};


const EditForm = ({ open, setOpen, post}: EditFormProps) => {
  const [translateY, setTranslateY] = useState<string>("")

  const slide = () => {
    setTranslateY("-translate-x-1/2 transition ease-out")
  }

  const slideBack = () => {
    setTranslateY("translate-x-1 transition ease-out")
  }

  const cancel = () => {
    setOpen(!open)
    slideBack()
  }

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50`}
      style={{ display: open ? "block" : "none" }}
    >
      <div className="w-11/12 mx-auto overflow-hidden">
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
              <CompanyEventForm />
              <hr className="lg:hidden" />
              <TaskForm />
            </div>

            <div className="flex">
              <div className="w-1/2 flex items-center justify-end p-3 gap-3">
                <button className="flex bg-gray-500 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50 " onClick={cancel}>
                  <span className="text-lg mr-2">中止</span>
                  <Cancel></Cancel>
                </button>
                <button className="flex bg-orange-500 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50 " onClick={slide}>
                  <span className="text-lg mr-2">追加</span>
                  <AddCircle></AddCircle>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
