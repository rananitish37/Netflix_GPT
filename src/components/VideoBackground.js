import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";


const VideoBackground = ({movieId}) => {
    useVideoTrailer(movieId ={movieId});
    const trailerVideo = useSelector((store) => store.movies?.videoTrailer);
    return(
        <div className="w-screen">
            <h1><iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1&&loop=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe></h1>
        </div>
    )
}
export default VideoBackground;