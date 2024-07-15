import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";


const VideoBackground = ({movieId}) => {
    useVideoTrailer(movieId ={movieId});
    const trailerVideo = useSelector((store) => store.movies?.videoTrailer);
    return(
        <div>
            <h1><iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe></h1>
        </div>
    )
}
export default VideoBackground;