import { useState } from "react";

function ChatToggleButton(params) {
    const onClick = function(e) {
        e.preventDefault()
        params.onClick(e)
    }
    return <div onClick={onClick} className={"fixed bottom-8 right-8 w-20 h-20 rounded-full bg-gray-50 ring-2 cursor-pointer ring-gray-200 shadow-lg transition-all " + (params.isOpen ? "ring-4 -translate-y-1 shadow-xl" : "")} title="Query Airwallex data">
        { params.isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" class="scale-75" viewBox="0 0 512 512">
            <path d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="32" />
            <circle cx="160" cy="256" r="32" />
            <circle cx="256" cy="256" r="32" />
            <circle cx="352" cy="256" r="32" />
        </svg>
        ) : (
        <svg xmlns="http://www.w3.org/2000/svg" class="scale-75" viewBox="0 0 512 512">
            <path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="32"/>
        </svg>
        ) }

    </div>
}
export default ChatToggleButton