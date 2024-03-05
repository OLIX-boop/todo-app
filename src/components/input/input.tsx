

const Input = () => {

    return (
        <div className="bg-elements_black p-5 flex rounded-md">
            <div className="round relative mr-10">
                <input type="checkbox" className="invisible" />
                <label className="bg-elements_black border hover:border-border_hover border-border rounded-3xl cursor-pointer h-7 left-0 top-0 absolute w-7"></label>
            </div>
            <input className="bg-transparent w-full" type="text"/>
        </div>
    )
}

export default Input;