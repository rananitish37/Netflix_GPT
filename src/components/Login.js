import Header from "./Header";

const Login = () =>{
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0">
                <input type="text" placeholder="Name" className="p-2 m-2" />
                <input type="password" placeholder="Password" className="p-2 m-2" />
                <button className="p-4 m-2 bg-red-500 text-white " >Sign In</button>
            </form>
        </div>
    )
}
export default Login;