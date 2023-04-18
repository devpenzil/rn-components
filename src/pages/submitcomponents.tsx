import ModalEditor from "@/components/ModalEditor";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { component } from "@/types/supabase";
import { useRouter } from "next/router";

type file = {
  filename: "";
  code: "";
};
function Submitcomponents() {
  const route = useRouter();
  const [openEditor, setOpenEditor] = useState(false);
  const [file, setFile] = useState<file>({
    code: "",
    filename: "",
  });
  const [files, setFiles] = useState([]);
  const { uploadToBucket, uploadComponent } = useStore();
  console.log(files);
  const submit = () => {
    const payload: component = {
      cname: "Custom Buttons with Variants - Horizon UI Tailwind",
      description:
        "Simple & modern dashboard custom buttons with variants from Horizon UI Tailwind CSS React",
      author: {
        image: "https://avatars.githubusercontent.com/u/67946056?v=4",
        uid: "78f98b50-8984-4cdc-a3b9-6d4afaa0dad8",
        username: "devpenzil",
      },
      downvotes: 0,
      files: files,
      previewurl:
        "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      upvotes: 0,
    };
    console.log(payload);
    // uploadComponent(payload, route.push("/"));
  };
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
                <div>{obj.filename}</div>
                <div className="flex gap-4">
                  <Image src="/icons/trash.svg" alt="" width={24} height={24} />
                  <Image src="/icons/edit.svg" alt="" width={24} height={24} />
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary mt-8" onClick={submit}>
          submit
        </button>
      </div>
      <ModalEditor
        isOpen={openEditor}
        closeEditor={() => {
          setOpenEditor(false);
        }}
        addfile={(e) => {
          setFiles((arr) => [...arr, e]);
        }}
      />
    </>
  );
}

export default Submitcomponents;
