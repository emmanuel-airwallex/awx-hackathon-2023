function WaitingStatus(params) {
    return <div className={"flex flex-row mt-4 "> + (params.visible ? "visible" : "")}>
        <span className="inline-block mr-1 animate-bounce animation-delay-0   translate-y-40 w-2 h-2 rounded-full bg-gray-500"></span>
        <span className="inline-block mr-1 animate-bounce animation-delay-200 translate-y-40 w-2 h-2 rounded-full bg-gray-500"></span>
        <span className="inline-block mr-1 animate-bounce animation-delay-400 translate-y-40 w-2 h-2 rounded-full bg-gray-500"></span>
    </div>
}
export default WaitingStatus