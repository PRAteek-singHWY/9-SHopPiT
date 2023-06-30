//FOR UPLOADING THE IMAGE
//implementing the color picker right from the scratch
import React from "react";
import CustomButton from "./CustomButton";
const FilePicker = ({ file, setFile, readFile, handleClick }) => {
    return (
        <div className="filepicker-container">
            <div className=" -py-100 absolute z-10 right-0 -top-8 ">
                <CustomButton
                    title="x"
                    CustomStyles="pb-0.5"
                    type="special"
                    handleClick={handleClick}
                />
            </div>
            <div className="flex flex-col flex-1">
                {/* this input is enablimg us to upload files
especially the id part */}

                {/* ⭐️⭐️⭐️⭐️Post-Mortem  of the input */}

                {/* 1-> id="file-upload": This sets the unique identifier for the input element. It can be used to associate a label with the input or target the element in CSS or JavaScript. */}

                {/*  2-> type="file": This specifies that the input should be of type "file", indicating that it allows users to select files from their device. */}

                {/* 3-> accept="image/": This attribute specifies the file types that are accepted by the input. In this case, it is set to "image/", indicating that only image files can be selected. The trailing slash ("/") indicates that any image format is allowed. */}

                {/* 4->  and after this, this onChange Function simply sets The Files 
        equal to the selected file 
        first {e} stores this event of selecting the file and then after that this file  is set as the file to be uploaded and used further */}

                {/* uploading the file */}
                <input
                    id="file-upload"
                    type="file"
                    accept="image/"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                    <button className="w-auto h-auto">

                <label htmlFor="file-upload" className="filepicker-label mr-16">
                Upload File

                </label >
                </button>
                <p className="mt-2 text-gray-200 text-xs truncate ml-2 ">
                    {file === "" ? "No File Selected" : file.name}
                </p>
            </div>

            <div className="flex flex-wrap mt-4 gap-3 ">
                <CustomButton
                    type="outline"
                    title="Logo"
                    handleClick={() => readFile("logo")}
                    CustomStyles="text-xs"
                />
                <CustomButton
                    type="filled"
                    title="Full"
                    handleClick={() => readFile("full")}
                    CustomStyles="text-xs"
                />
            </div>
        </div>
    );
};

export default FilePicker;
