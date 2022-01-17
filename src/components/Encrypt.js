import { useEffect, useState } from "react";

import { encrypt } from "../utils/VigenereCipher";

const Encrypt = () => {
    const [inpText, setInpText] = useState("");
    const [key, setKey] = useState("");
    const [encText, setEncText] = useState("");

    useEffect(() => {
        setEncText(encrypt(inpText, key));
    }, [inpText, key])

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

            <div className="flex flex-col w-full">
                <label className="px-2 pt-2 text-lg w-full" htmlFor="outText">Encrypted Text</label>
                <textarea 
                    id="outText" 
                    cols="20" 
                    rows="4"
                    value={encText}
                    className="p-2 w-full border-2 rounded border-slate-500 hover:border-slate-300 duration-200 outline-none resize-none font-mono uppercase bg-slate-700" 
                    readOnly
                ></textarea>
            </div>
        </div>
    )
}

export default Encrypt;