const VideoTitle = ({title, overview}) => {
    return(
        <div className="pt-36 px-12">
            <h1 className="text-5xl font-bold">{title} </h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="bg-gray-300 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">▶ Play</button>
                <button className="mx-2 bg-gray-300 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">ℹ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;