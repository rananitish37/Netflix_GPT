import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.addNowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview} = mainMovie;
    console.log(mainMovie);

    return(
      <div className="">
        <VideoTitle title ={original_title} overview={overview} />
        <VideoBackground />
      </div>  
    );
}
export default MainContainer;