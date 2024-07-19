const VideoTitle = ({title, overview}) => {
    return(
        <div className="w-screen aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title} </h1>
            <p className="py-6 text-sm w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-3 px-10 text-xl hover:bg-opacity-80 rounded-lg"> Play</button>
                <button className="mx-2 bg-gray-500 text-white p-3 px-10 text-xl hover:bg-opacity-50 rounded-lg"> More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;