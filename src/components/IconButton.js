function IconButton(params) {
    return <div className="p-[10px] bg-gray-50 ring-2 ring-gray-200 w-10 h-10 rounded float-right ml-4">
        {params.children}
    </div>
}
export default IconButton