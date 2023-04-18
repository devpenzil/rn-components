import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface Props {
  isOpen: boolean;
  closeEditor: () => void;
  addfile: (e: any) => void;
}
function ModalEditor({ isOpen, closeEditor, addfile }: Props) {
  const [filename, setfilename] = useState("");
  const [code, setCode] = useState<string | undefined>("");
  const submitFile = () => {
    const payload = {
      filename: filename,
      code: code,
    };
    addfile(payload);
    closeEditor();
  };
  return (
    <>
      {isOpen && (
        <div className="bg-transparent w-full h-screen fixed top-0 flex justify-center items-center">
          <div className="w-2/3 bg-white h-max shadow rounded-2xl p-4 border">
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-semibold">
                <input
                  type="text"
                  placeholder="File name"
                  className="input w-full bg-white"
                  onChange={(e) => {
                    setfilename(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue="// code goes here.."
                onChange={(e) => {
                  setCode(e);
                }}
              />
            </div>
            <button className="btn btn-primary mt-8" onClick={submitFile}>
              Save
            </button>
            <button className="btn btn-ghost mt-8 ml-4" onClick={closeEditor}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalEditor;
