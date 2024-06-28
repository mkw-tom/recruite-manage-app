import {
  CheckCircleOutline,
  AddCircleOutline,
  KeyboardDoubleArrowRight,
  DeleteOutline,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { dammyData } from "../../dummyData";
import { Step } from "@mui/material";

type StepsProps = {
  id: string;
  text: string;
  completed: boolean;
  current: boolean;
  selected: boolean;
  region: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  limitDate: string;
  limitTime: string;
};

const Stepper = () => {
  const [addStep, setAddStep] = useState<boolean>(false);

  const data = dammyData[0];
  const steps = data.companies.steps;
  const curStep = steps.find((step) => step.current === true);
  const [selectData, setSelectData] = useState(curStep);
  console.log(selectData);

  const handleSelect = (id: string) => {
    const select = steps.find((step) => step.id === id);
    setSelectData(select);
  };
  return (
    <div className="w-auto h-auto m-2">
      <div className="flex justify-between">
        <h2 className="block w-56 text-white bg-sky-300 rounded-md py-1">
          選考フロー
        </h2>
        <div className="flex">
          <button className="bg-white border-2 border-gray-500 text-gray-500 rounded-l-md w-36 py-1 flex items-center justify-center hover:bg-gray-500 hover:text-white duration-200">
            <AddCircleOutline></AddCircleOutline>
            Add Step
          </button>
          <button className="bg-white border-y-2 border-r-2 border-gray-500 text-gray-500 rounded-r-md w-36 py-1 flex items-center justify-center hover:bg-gray-500 hover:text-white duration-200">
            <DeleteOutline></DeleteOutline>
            Delte Step
          </button>
        </div>
      </div>
      <div className="w-auto h-auto ">
        <div className="overflow-x-auto h-auto w-auto my-2 flex items-start mr-2">
          {steps.map((step: StepsProps, index: number) => (
            <div key={index} className="flex">
              <div
                className={`w-36 flex flex-col items-center mx-5 group relative py-4 cursor-pointer ${
                  step.current ? "bg-sky-200" : "bg-inherit"
                }`}
                onClick={() => handleSelect(step.id)}
              >
                {step.completed ? (
                  <CheckCircleOutline className="text-green-600" />
                ) : (
                  <p
                    className={`rounded-full w-5 h-5 ${
                      step.current
                        ? "animate-pulse bg-green-500"
                        : "animate-none bg-gray-400"
                    }`}
                  ></p>
                )}
                <p className="w-40 mt-2">{step.text}</p>
                {/* <div className="hidden w-96 flex-col group-hover:flex bg-white p-1 rounded-md absolute -top-20 -left-2 right-10 items-start z-20">
                            <small>応募期限：2024 7/10</small>
                            <small>
                                開催日時：<br />2024 7/25 10:00<br /> ~ <br />2024 7/25 10:00 
                            </small>
                          </div> */}
              </div>
              <KeyboardDoubleArrowRight
                className={`mt-6 ${
                  step.completed ? "text-green-500" : "text-gray-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-1">
        <div className="w-6/12  bg-white   rounded-md flex py-1 shadow-md">
          <h2 className="w-56 h-auto my-auto flex items-center justify-center">
            <CheckCircleOutline className="text-green-600 mr-2" />
            <span>{selectData?.text}</span>
          </h2>
          <ul className="list-disc text-left">
            <li>
              応募期限：{selectData?.limitDate} {selectData?.limitTime}{" "}
            </li>
            <li>
              開催期間：{selectData?.startDate}　{selectData?.endDate}
              <span className="mx-2">~</span>
              {selectData?.startTime}　{selectData?.endTime}
            </li>
          </ul>
        </div>

        <div className="flex w-6/12">
          <div className="flex mx-auto">
            <button className="w-28 h-10 border-2 border-red-500 text-red-500 rounded-md mr-2 hover:bg-red-500 hover:text-white duration-500">
              faild
            </button>
            <button className="border-2 border-sky-400 text-sky-400 w-28 h-10 hover:bg-sky-400 hover:text-white duration-100 rounded-l-md">
              prev
            </button>
            <button className="border-y-2 border-y-sky-400 text-sky-400 w-28 h-10 hover:bg-sky-400 hover:text-white duration-100">
              completed!
            </button>
            <button className="border-2 border-sky-400 text-sky-400 w-28 h-10 hover:bg-sky-400 hover:text-white duration-100 rounded-r-md">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
