const BackGround = ({dark}:{dark:boolean}) =>     

    <div className="bg absolute w-full h-full z-[-1]">
        <img className="w-full h-[40%]" src= {"../public/images/"+ (dark?"bg-desktop-dark.jpg": "bg-desktop-light.jpg")} alt="IMG" />
        <div className="w-full h-[60%] dark:bg-background_black bg-white"></div>
    </div>

export default BackGround;