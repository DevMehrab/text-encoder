import React from "react";
import data from "../data";
export const TextField = ({ state, placeholder, input, setInput, setOutput }) => {
    function handleInput(e) {
        setInput('')
        setInput(e.target.value)
        if (state === "Text to Code") {
            const text = e.target.value
            const array = text.split("")
            let encodedDataArray = []
            array.forEach(element => {
                if (data[element]) {
                    console.log('yes');
                    encodedDataArray.push(data[element])
                }
            });
            let encodedData = encodedDataArray.join('')
            setOutput(encodedData)
        }
        if (state === "Code to Text") {
            let reversedData = Object.fromEntries(
                Object.entries(data).map(([key, value]) => [value, key])
            )

            const text = e.target.value
            const array = text.split("")
            console.log(array);

            let encodedDataArray = []
            for (let index = 0; index < array.length; index = index + 5) {
                if (reversedData[array.slice(index, index + 5).join('')]) {
                    encodedDataArray.push(reversedData[array.slice(index, index + 5).join('')])

                }
            }
            let encodedData = encodedDataArray.join('')
            setOutput(encodedData)
        }
    }
    function handlePaste() {
        setInput('')
    }

    return (
        <>
            <h1>Input:</h1>
            <textarea
                className="border-0 outline-0 resize-none bg-white rounded p-4 w-full my-4"
                placeholder={placeholder}
                onInput={handleInput}
                onPaste={handlePaste}
                value={input}
            ></textarea>
        </>
    );
};
