import { useState } from "react";
import { useLocation } from 'react-router-dom';

import Message from "./Message"
import { conversionPrompt, expensesPrompt } from "../data/prompts";

function Container() {
    const location = useLocation();
    const [inputValue, setInput] = useState("")
    const [messages, setMessage] = useState([location.pathname === "/conversions" ? conversionPrompt[0] : expensesPrompt[0]]);

    const onChangeHandler = event => {
        if (event.key === 'Enter') {
            console.log('do validate')
            setInput("");
            setMessage(messages => [...messages, { 'user': 'user', prompt: inputValue }, { 'user': 'operator', prompt: location.pathname === "/conversions" ? conversionPrompt[messages.length + 1].prompt : expensesPrompt[messages.length + 1].prompt }])
            return
        }
        console.log('e', event.target.value)
        setInput(event.target.value);
    };

    console.log('location', location.pathname)

    return (
        <div className="fixed bottom-0 right-0 m-4 p-8 h-3/4 max-w-lg w-full m-8">
            <div className="bg-gray-50 m-4 p-8 ring-2 rounded ring-gray-100 w-full h-full min-h-full flex flex-col shadow-lg">
                <h1 className="font-bold text-gray-700 mb-4">Airpilot</h1>
                <hr className="mb-4" />
                <div className="block w-full overflow-y-scroll no-scrollbar p-4">
                    <div className="flex flex-col">
                        {messages.map((message, i) => { return <Message key={i} fromBot={message.user === "operator"} message={message.prompt} /> })}
                    </div>
                    <span className="mb-8"></span>
                </div>
                <div className="block mt-auto bottom-10 pt-4 w-full">
                    <div className="flex flex-row h-10">
                        <input className="flex-grow w-full p-4 mr-4 ring-2 rounded ring-gray-100" placeholder="What were AUDUSD rates over the past year?" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 absolute right-14 bottom-4" class="ionicon" viewBox="0 0 512 512">
                            <path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Container;
