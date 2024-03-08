import { useRef } from "react";

const Input = ({createNewMSG}: {createNewMSG:(str:string)=>void}) => {
    const input = useRef<HTMLInputElement>(null);

    const handleMSG = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.key !== 'Enter') return;
        if (input.current!.value.trim() === '') return;
        createNewMSG(input.current!.value.trim());
        input.current!.value = "";
    }


    const randomInRange = (min:number, max:number):number =>  Math.floor(Math.random() * (max - min) + min); 

    const todoPlaceHolders = ["Dity the bedroom", "Clean the acquarium", "Feed the animals", "Do the homework", "Exercise"];

    return (
        <div className="dark:bg-elements_black bg-white p-5 flex rounded-md">
            <div className="round relative mr-10">
                <input type="checkbox" className="invisible" />
                <label className="dark:bg-elements_black border hover:border-border_hover border-border rounded-3xl cursor-pointer h-7 left-0 top-0 absolute w-7"></label>
            </div>
            <input ref={input} placeholder={todoPlaceHolders[randomInRange(0, todoPlaceHolders.length-1)] + " ..."} onKeyUp={handleMSG} className="bg-transparent w-full dark:text-white text-gray-950" type="text"/>
        </div>
    )
}

export default Input;