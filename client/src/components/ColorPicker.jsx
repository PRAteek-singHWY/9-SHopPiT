//FOR pICKING THE COLOR OF THE SHIRT

import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomButton from "./CustomButton";
const ColorPicker = ({ handleClick }) => {
    const snap = useSnapshot(state);
    return (
        <div className="absolute left-full ml-3">
            <div className=" -py-100 absolute z-10 right-0 -top-8 md:text-[#ec1111]">
                <CustomButton
                    title="x"
                    CustomStyles="pb-0.5 "
                    type="special"
                    handleClick={handleClick}
                />
            </div>
            {/* //self-closing */}
            <SketchPicker
                //default yellow color
                color={snap.color}
                disableAlpha
                // presetColors={["#510823", "#55f50d", "#55f50d", "#f50d2a", "#0dd8f5"]}
                onChange={(color) => (state.color = color.hex)}
            />
            <div className={`bg-[#012c45] text-gray-300`}>
                Hex Code:{state.color}
            </div>
        </div>
    );
};

export default ColorPicker;
