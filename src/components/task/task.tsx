import { useId } from "react";

const Task = ({}) => {
    const id = useId();

    return (<div className="border-b border-border p-5 flex"> 
            <div className="round relative mr-10">
                <input type="checkbox" className="invisible" id={id} />
                <label htmlFor={id} className="bg-elements_black border hover:border-border_hover border-border rounded-3xl cursor-pointer h-7 left-0 top-0 absolute w-7 after:border-2 after:border-white after:border-t-0 after:border-r-0 after:h-1.5 after:left-2 after:opacity-0 after:absolute after:top-2 after:content[''] after:-rotate-45 after:w-3"></label>
            </div>
            <input disabled value={"CIAO"} className="bg-transparent w-full cursor-pointer" type="text"/>
            <i className="fa-sharp fa-thin fa-xmark text-xl h-3.5"></i>
    </div>)
}


export default Task;