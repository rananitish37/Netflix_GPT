import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () =>{
    const [formName, setFormName] = useState("Sign In");
    
    const email = useRef(null);
    const password = useRef(null);
    const [message,setMessage] = useState(null);

    const handleButtonClick = () =>{

        // console.log(email.current.value);
        // console.log(password);

        // VALIDATION
        const message = checkValidData(email.current.value, password.current.value);
        setMessage(message);
        // console.log(message);

        // AUTHENTICATION
        if(formName == "Sign Up"){
        // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorCode+"-"+errorMessage);
                // ..
            });
        }else{
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorCode+"-"+errorMessage);
            });
        }

    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black bg-opacity-90 my-36 mx-auto text-white left-0 right-0">
                <h1 className="font-bold text-3xl py-4 ">{formName}</h1>
                {formName === "Sign Up" && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />}
                <input ref={email} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <p className="font-bold text-red-500 py-1" >{message}</p>
                <button onClick={handleButtonClick} className="p-4 my-6 w-full bg-red-700 text-white rounded-lg " >{formName}</button>
                <p onClick={()=>{formName === "Sign Up" ? setFormName("Sign In") : setFormName("Sign Up")}} className="cursor-pointer">{formName === "Sign In" ? "New to Netflix ? SignUp" : "Already have account ? SignIn" }</p>
            </form>
        </div>
    )
}
export default Login;