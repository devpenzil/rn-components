import ModalEditor from "@/components/ModalEditor";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/store";

type file = {
  filename: "";
  code: "";
};
function Submitcomponents() {
  const [openEditor, setOpenEditor] = useState(false);
  const [file, setFile] = useState<file>({
    code: "",
    filename: "",
  });
  const [files, setFiles] = useState([1, 2, 3]);
  const { uploadToBucket } = useStore();
  return (
    <>
      <div className="container mx-auto py-12">
        <div className="flex justify-between">
          <div className="w-1/2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Component Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered  max-w-xs bg-white border w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea textarea-bordered h-24 bg-white"></textarea>
            </div>
          </div>
          <div className="w-1/2">
            <input
              type="file"
              alt="Submit"
              onChange={(e) => {
                // console.log(e?.target?.files[0].name);
                uploadToBucket(e?.target?.files[0]);
              }}
            />
          </div>
        </div>
        <div>
          <button
            className="mt-7 btn"
            onClick={() => {
              setOpenEditor(true);
            }}
          >
            add file +
          </button>
        </div>
        <div className="mt-8">
          {files.map((obj, index) => {
            return (
              <div
                className="bg-gray-300 p-4 rounded-lg flex justify-between cursor-pointer my-1"
                key={index}
              >
                <div>index.tsx</div>
                <div className="flex gap-4">
                  <Image src="/icons/trash.svg" alt="" width={24} height={24} />
                  <Image src="/icons/edit.svg" alt="" width={24} height={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ModalEditor
        isOpen={openEditor}
        closeEditor={() => {
          setOpenEditor(false);
        }}
      />
    </>
  );
}

export default Submitcomponents;
