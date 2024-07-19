import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useUpcommingMovies =()=>{
    const dispatch = useDispatch();
    const getUpcommingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcommingMovies(json.results));
    };

    useEffect(() =>{
        getUpcommingMovies();
    },[]);
}

export default useUpcommingMovies;
