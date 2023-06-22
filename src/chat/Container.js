import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Message from "./Message"
import { conversionPrompt, expensesPrompt } from "../data/prompts";
import ChatToggleButton from "./ChatToggleButton";

function Container() {
    const location = useLocation();
    const [inputValue, setInput] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessage] = useState([location.pathname === "/conversions" ? conversionPrompt[0] : expensesPrompt[0]]);
    const isContextConversions = location.pathname === "/conversions"

    const send = () => {
        if (inputValue.trim() == "") return;
        setInput("");
        setMessage(messages => [...messages, { 'user': 'user', prompt: inputValue }, { 'user': 'operator', prompt: isContextConversions ? conversionPrompt[messages.length + 1].prompt : expensesPrompt[messages.length + 1].prompt }])
    }

    const onChangeHandler = event => {
        if (event.key === 'Enter') {
            send()
            return
        }
        console.log('e', event.target.value)
        setInput(event.target.value);
    };

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <>
            <ChatToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            {
                <div className={"fixed bottom-24 right-0 m-4 p-8 h-3/4 max-w-lg w-full m-8 transition-all " + (isOpen ? "-translate-x-3 opacity-100" : "opacity-0")} >
                    <div className="bg-gray-50 m-4 p-8 ring-2 rounded ring-gray-100 w-full h-full min-h-full flex flex-col shadow-lg">
                        <h1 className="font-bold text-gray-700 mb-4">Airpilot</h1>
                        <hr className="mb-4" />
                        <div className="block w-full overflow-y-scroll no-scrollbar p-4">
                            <div className="flex flex-col">
                                {messages.map((message, i) => { return <Message key={i} fromBot={message.user === "operator"} message={message.prompt} /> })}
                            </div>
                            <span className="mb-8" ref={messagesEndRef}></span>
                        </div>
                        <div className="block mt-auto bottom-10 pt-4 w-full">
                            <div className="flex flex-row h-10">
                                <input className="flex-grow text-lg w-full p-4 mr-4 ring-2 rounded ring-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-200" placeholder="Ask a question..." onKeyDown={onChangeHandler} onChange={onChangeHandler} value={inputValue} />
                                <svg xmlns="http://www.w3.org/2000/svg" classNames="w-8 h-8 absolute right-14 bottom-4" style={{"cursor":"pointer"}} height="100%" onClick={send} viewBox="0 0 512 512">
                                    <path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default Container;
