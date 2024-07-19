import {IMG_CDN} from "../Utils/constants"

const MovieCard = ({posterPath}) => {
    return(
        <div className="w-48 pr-4">
            <img alt="movie poster" src={IMG_CDN + posterPath} />
        </div>
    )
}
export default MovieCard;