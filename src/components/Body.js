import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () =>{
    const dispatch = useDispatch();

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, name,photoURL} = user;
              dispatch(addUser({uid: uid, email: email, name: name, photoURL: photoURL}));
            } else {
              // User is signed out
              dispatch(removeUser());
              
            }
          })
    },[]);
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);
    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default Body;