import React from "react";

export const Button = ({ state, setState, setInput, setOutput, text }) => {
  const style = `rounded p-4 text-zinc-50 hover:bg-sky-900 focus:bg-sky-900 ${state === text ? "bg-sky-900" : "bg-zinc-900"}`;

  function handleClick() {
    setState(text);
    setInput("");
    setOutput("");
  }

  return (
    <>
      <button className={style} onClick={() => handleClick()}>
        {text}
      </button>
    </>
  );
};
