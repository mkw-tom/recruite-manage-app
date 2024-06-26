import {
  CheckCircleOutline,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import React, { useState } from "react";

type StepsProps = {
  text: string;
  completed: boolean;
  current: boolean;
};
// export const steps: string[] = ["ES提出", "面接", "インターン長期"];
export const steps: StepsProps[] = [
  { text: "エントリー", completed: true, current: false },
  { text: "説明会", completed: true, current: false },
  { text: "面接", completed: false, current: true },
  { text: "適正検査", completed: false, current: false },
  { text: "インターン長期", completed: false, current: false },
  { text: "本選考", completed: false, current: false },
  { text: "本選考", completed: false, current: false },
];

const Stepper = () => {
  const [addStep, setAddStep] = useState<boolean>(false);

  return (
    <div className="w-auto h-auto m-2">
      <h2 className="block w-56 text-white bg-sky-300 rounded-md py-1">
        選考フロー
      </h2>
      <div className="w-auto h-auto ">
        <div className="overflow-x-auto h-auto w-auto py-5 flex items-start mr-2">
          {steps.map((step: StepsProps, index:number) => (
            <div key={index} className="flex">
              <div className="w-36 flex flex-col items-center mx-5 group relative py-4">
                {step.completed ? (
                  <CheckCircleOutline className="text-green-600"/>
                ) : (
                  <p
                    className={`rounded-full w-5 h-5 ${
                      step.current ? "animate-pulse bg-green-500" : "animate-none bg-gray-400"
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
              <KeyboardDoubleArrowRight className={`mt-6 ${step.completed ? "text-green-500" : "text-gray-400"}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-1">
        <div className="w-6/12  bg-white   rounded-md flex">
          <h2 className="w-56 h-auto my-auto flex items-center justify-center">
          <CheckCircleOutline className="text-green-600 mr-2"/>
            <span>インターン</span>
          </h2>
          <ul className="list-disc text-left">
            <li>応募期限：2024 7/25 23:59</li>
            <li>開催期間：2024 8/12 10:20<span className="mx-2">~</span>2024 8/19 18:00</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Stepper;
