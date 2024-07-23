import { useSelector } from "react-redux";
import lang from "../Utils/languages";


const GptSearchBar = () => {

    const language = useSelector((store) => store.config.lang);
    return(
        <div className=" pt-[10%] flex justify-center ">
            <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
                <input className="col-span-9 m-3 p-3 rounded-md " placeholder={lang[language].getSearchPlaceholder}/>
                <button className="col-span-3 m-3 px-2 py-3 bg-red-500 text-white rounded-lg" >{lang[language].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;