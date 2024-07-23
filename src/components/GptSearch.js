import { BG_LOGIN } from "../Utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptVideoSuggestion from "./GptVideoSuggestion";

const GptSearch = () => {
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BG_LOGIN} alt="background" />
            </div>
            <GptSearchBar />
            <GptVideoSuggestion />
        </div>
    )
}
export default GptSearch;