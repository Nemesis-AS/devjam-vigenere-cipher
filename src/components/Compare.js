import { useEffect, useState } from "react";

import { encrypt, decrypt } from "../utils/VigenereCipher";

const Compare = () => {
    const [inpText, setInpText] = useState("");
    const [key, setKey] = useState("");
    const [outText, setOutText] = useState("");
    const [errorClass, setErrorClass] = useState("");

    useEffect(() => {
        setOutText(decrypt(encrypt(inpText, key), key));
    }, [inpText, key]);

    const compareText = () => {
        if (inpText.toLowerCase() === outText.toLowerCase()) {
            setErrorClass("");
        } else {
            setErrorClass("bg-red-800");
        }
    };

    return (
        <div className="flex flex-col items-center px-2 w-full md:w-3/5">
            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="inpKey">Key</label>
                <input 
                    type="text" 
                    id="inpKey" 
                    placeholder="Enter Key" 
                    value={key} 
                    onChange={e => setKey(e.target.value)} 
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none uppercase bg-slate-700" 
                />
            </div>

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="inpText">Plain Text</label>
                <textarea 
                    id="inpText" 
                    cols="20" 
                    rows="4"
                    placeholder="Enter Text"
                    value={inpText}
                    onChange={e => setInpText(e.target.value)} 
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none resize-none font-mono uppercase bg-slate-700" 
                ></textarea>
            </div>

            <div className="flex align-center">
                <button className="m-2 p-2 border-2 rounded h-auto duration-200 outline-none border-slate-500 hover:border-slate-300 hover:text-white" onClick={compareText}>Compare</button>
            </div>

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="outText">Encrypted/Decrypted Text</label>
                <textarea 
                    id="outText" 
                    cols="20" 
                    rows="4"
                    value={outText}
                    className={`p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none resize-none font-mono uppercase bg-slate-700 ${errorClass}`} 
                    readOnly
                ></textarea>
            </div>
        </div>
    )
}

export default Compare;