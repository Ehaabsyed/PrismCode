import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import axios from "axios";
import Loader from "../components/Loader";
import ResponsePreview from "../components/ResponsePreview";

function Review() {
  const [code, setCode] = useState(`function greet() {
  console.log("Hello, World!");
}`);
const [response, setresponse] = useState(``)
const [show, setshow] = useState(false)
const reviewCode=async()=>{
    setshow(true);
  //api call to backend
  console.log("Reviewing code:");
  axios.post('http://localhost:3000/ai/review',{
    prompt:code
  }).then((response)=>{ 
    console.log(response.data.response);
    setresponse(response.data.response);
    setshow(false); 
  }).catch((error)=>{
    console.error("Error:",error);
  });
  
}

  return (
    <div className="h-screen flex w-full bg-zinc-900 text-white">
      <div className="left w-1/2 h-full border-r-2 border-white p-4">
        <div className="editor bg-black relative h-full w-full rounded-md overflow-auto">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={12}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 14,
              minHeight: "100%",
            }}
          />
          <button onClick={()=>reviewCode()} className="absolute w-20 flex justify-center items-center h-7 cursor-pointer bottom-2 right-2 bg-white text-black font-semibold px-5 py-1 rounded-full">
            {show? <Loader/> :"Review"}
          </button>
        </div>
      </div>

      <div className="right w-1/2 h-full p-4">
        <div className="respond h-full w-full overflow-auto bg-black rounded-md p-4">
          <h2 className="text-lg font-semibold">AI Review</h2>
          <p className="mt-2 text-[18px] text-gray-300">
            <ResponsePreview response={response} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
