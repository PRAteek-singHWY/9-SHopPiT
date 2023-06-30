import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import chroma from "chroma-js";

const CustomButton = ({ type, title, handleClick, CustomStyles,heart }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {


       if(type==="shop"){
        return{
            backgroundColor: "#F59E0B"

        }

       }
        if (type === "filled") {
            // Check the lightness value of the snap.color using a color library like chroma.js
            const lightness = chroma(snap.color).luminance();

            // Define the threshold value for determining when the color is considered too light
            const lightnessThreshold = 0.3; // Adjust this value based on your preference

            // Conditionally set the text color
            const textColor =
                lightness > lightnessThreshold ? "black" : "white";

            return {
                backgroundColor: snap.color,
                color: textColor,
            };
        } else if (type === "outline") {
            const contrastRatio = chroma.contrast(snap.color, "black");
            const contrastingColor = contrastRatio >= 4.5 ? "black" : "white";

            return {
                borderWidth: "1px",
                borderColor: snap.color,
                color: contrastingColor,
            };
        } else if (type === "special") {
            const contrastRatio = chroma.contrast(snap.color, "black");
            const contrastingColor = contrastRatio >= 4.5 ? "black" : "white";

            return {
                borderWidth: "1px",
                color: contrastingColor,
                borderColor: contrastingColor,
            };
        }
    };
    return (
        <button
        className={`px-2 py-1.2 flex-1 rounded-md ${CustomStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>

    );
};
export default CustomButton;
