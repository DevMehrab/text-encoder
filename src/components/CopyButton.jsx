import React from 'react';

export const CopyButton = ({ output }) => {
    function handleClick(e) {
        navigator.clipboard.writeText(output)
        if (output !== '') {
            e.target.innerHTML = "Copied ✔"

            setTimeout(() => {
                e.target.innerHTML = "Copy"
            }, 3000)

        }
    }
    return (
        <>
            <button onClick={(e) => handleClick(e)} className="absolute top-[10px] right-[10px] bg-neutral-700 px-2 p-1 rounded text-white focus:bg-sky-900 hover:bg-sky-900">
                Copy
            </button>
        </>
    );
};