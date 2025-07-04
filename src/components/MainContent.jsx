import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { CopyButton } from "./CopyButton";

export const MainContent = () => {
  const [state, setState] = useState("Text to Code");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  let outputMessage =
    state === "Text to Code" ? (
      <span className="p-1 bg-emerald-100 text-emerald-600 rounded">
        Your Invisible text is ready: ↓
      </span>
    ) : (
      <span className="p-1 bg-emerald-100 text-emerald-600 rounded">
        Your Decoded text is ready: ↓
      </span>
    );

  let placeholder =
    state === "Text to Code"
      ? "Enter some text (EG: hello, how are you?)"
      : "Paste your invisible code";

  return (
    <>
      <div className="w-full xl:w-1/2 ">
        <nav className="w-full grid grid-cols-2 gap-2 mb-8">
          <Button
            state={state}
            setInput={setInput}
            setOutput={setOutput}
            setState={setState}
            text={"Text to Code"}
          />
          <Button
            state={state}
            setInput={setInput}
            setOutput={setOutput}
            setState={setState}
            text={"Code to Text"}
          />
        </nav>

        <main>
          <TextField
            state={state}
            input={input}
            setInput={setInput}
            placeholder={placeholder}
            setOutput={setOutput}
          />
          <div>
            <h3>{output === "" ? "Output:" : outputMessage}</h3>
            <div className="p-4 pr-16 relative my-4 bg-white w-full h-80 rounded ">
              <p className="h-full overflow-y-auto">{output}</p>

              <CopyButton output={output} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
