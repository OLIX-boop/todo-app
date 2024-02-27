

const Input = () => {

    return (
        <div className="bg-elements_black px-4">
            <div className="round relative">
                <input type="checkbox" className="invisible" id="checkbox" />
                <label className="bg-white rounded-3xl cursor-pointer h-7 left-0 top-0 absolute w-7 after:border-2 after:border-white after:border-t-0 after:border-r-0 after:h-1.5 after:left-2 after:opacity-0 after:absolute after:top-2 after:content[''] after:-rotate-45 after:w-3" htmlFor="checkbox"></label>
            </div>
            <input type="text"/>
        </div>
    )
}

export default Input;