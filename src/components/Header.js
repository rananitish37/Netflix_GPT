import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { logo_URL, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

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

    const handleGptSearchClick = () =>{
        dispatch(toggleGptSearchView());
    }

    const handleChangeLanguage = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }

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
                {showGptSearch && <select className="bg-gray-900 text-white px-2 m-2 rounded-md" onChange={handleChangeLanguage}>
                {SUPPORTED_LANGUAGES.map((opt)=><option key={opt.identifier} value={opt.identifier} >{opt.name}</option>)};
                </select>}
                <button className="bg-purple-800 text-white px-2 m-2 rounded-md" onClick={handleGptSearchClick}>{showGptSearch ? "Goto Browse" : "Gpt Search"}</button>
                <img className="w-10 h-10 rounded-sm" alt="logo" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white">(SignOut)</button>
            </div>}
        </div>
        
    )
}
export default Header;