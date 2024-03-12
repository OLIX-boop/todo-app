import React, { SetStateAction } from 'react';

const Header = ({dark, setDark}: {dark:boolean, setDark:React.Dispatch<SetStateAction<boolean>>}) => {

  return (
    <div className="flex justify-between mb-7">
      <h1 className="title tracking-[1rem] text-5xl">TODO</h1>
      <i
        onClick={() => {
          document.body.classList.toggle("dark");
          setDark((dk:boolean) => !dk);
        }}
        className={
          (!dark ? "fa-regular fa-moon" : "fa-light fa-sun-bright") +
          " text-3xl flex items-center justify-center"
        }
      ></i>
    </div>
  );
};

export default Header;
