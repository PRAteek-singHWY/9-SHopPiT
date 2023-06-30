///FOR PICKING THE AI IMAGE

import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({
    prompt,
    setPrompt,
    generatingImg,
    handleSubmit,
    handleClick,
}) => {
    return (
        <div className="aipicker-container">
            <div className=" -py-100 absolute z-10 right-0 -top-8 ">
                <CustomButton
                    title="x"
                    CustomStyles="pb-0.5"
                    type="special"
                    handleClick={handleClick}
                />
            </div>
            <textarea
                placeholder="Your Prompt"
                className="aipicker-textarea"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
            />
            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton
                        type="outline"
                        title="Asking AI...."
                        CustomStyles="text-xs"
                    />
                ) : (
                    <>
                        <CustomButton
                            type="outline"
                            title="AI logo"
                            handleClick={() => handleSubmit("logo")}
                            CustomStyles="text-xs"
                        />

                        <CustomButton
                            type="filled"
                            title="AI full"
                            handleClick={() => handleSubmit("full")}
                            CustomStyles="text-xs"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default AIPicker;
