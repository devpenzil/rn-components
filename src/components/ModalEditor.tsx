import React from "react";
import Editor from "@monaco-editor/react";

interface Props {
  isOpen: boolean;
  closeEditor: () => void;
}
function ModalEditor({ isOpen, closeEditor }: Props) {
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
                />
              </div>
            </div>
            <div>
              <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue="// code goes here.."
              />
            </div>
            <button className="btn btn-primary mt-8">Save</button>
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
