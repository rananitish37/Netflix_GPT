import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useVideoTrailer = ({movieId}) => {
     // const [trailerId, setTrailerId] = useState(null);
     const dispatch = useDispatch();
     
 
     const getMovieVideos = async () =>{
 
         const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
 
         const json = await data.json();
 
         const filterData = json.results.filter((video) => video.type === "Trailer");
         const trailer = filterData[0];
        //  console.log(trailer);
         dispatch(addVideoTrailer(trailer));
         // setTrailerId(trailer.key);
 
     }
 
     useEffect(()=>{
         getMovieVideos();
     },[]);
}
export default useVideoTrailer;