import { useState } from "react";

const Controls = ({tasks,filter}: {tasks: Array<object>, filter: (type: string) => void}) => {
  const selectors = ["All", "Active", "Completed"];
  const style = "hover:text-slate-100 ";
  const [currentSelector, setCurrentSelector] = useState("All"); //All, Active, Completed

  return (
    <>
      <div className="flex w-full justify-between p-4">
        <p className={"text-gray-500 " + style}>{tasks.length} Items left</p>

        <div className="flex justify-between gap-2 ">
          {selectors.map((e, i) => (
            <p
              key={i}
              onClick={() => {
                setCurrentSelector(e);
                filter(e);
              }}
              className={`${style} ${
                currentSelector === e ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {e}
            </p>
          ))}
        </div>

        <p className={"text-gray-500 " + style}>Clear Completed</p>
      </div>
    </>
  );
};

export default Controls;
