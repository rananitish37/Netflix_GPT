import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { logo_URL } from "../Utils/constants";

const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, name,photoURL} = user;
                dispatch(addUser({uid: uid, email: email, name: name, photoURL: photoURL}));
                navigate("/browse")
            } else {
              // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        })
        return ()=> unsubscribe();
    },[]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-48" src={logo_URL} alt="logo" />
            {user && <div className="flex p-4">
                <img className="w-10 h-10 rounded-sm" alt="logo" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white">(SignOut)</button>
            </div>}
        </div>
        
    )
}
export default Header;