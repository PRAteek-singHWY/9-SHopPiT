// import { useState } from "react"
import { Link } from "react-router-dom";
import { download, downloader } from "../assets";
import { downloadImage } from "../utils";
import CustomButton from "./CustomButton";

const Card = ({ name, photo, designName }) => {
    // const [hover, setHover] = useState(false)

    return (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card ">
            <img
                className="  w-full h-full object-cover rounded-xl "
                src={photo}
                alt="design"
            />

            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                <p className="text-left text-yellow-500 font-semibold text-xs whitespace-normal">
                    Design's Name:&nbsp;{designName}
                </p>

                <div
                    className="mt-5 flex 
    justify-between items-center gap-2 "
                >
                    <div className="flex items-center gap-2">
                        <div className="bg-[#F59E0B]  w-7 h-7 rounded-full text-black ">
                            <p
                                className="
              justify-center items-center flex
              text-center font-semibold text-1xl mt-0.5"
                            >
                                {name[0]}
                            </p>
                        </div>
                        <p className="text-center text-yellow-500  font-semibold text-xs  ">
                            {name}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between abs">

                   
                    <div className="ml-4">
                    <button
                        type="button"
                        onClick={() => downloadImage(designName, photo)}
                        className="outline-none bg-transparent border-none"
                    >
                        <img
                            className="w-6 h-6 object-contain "
                            src={downloader}
                            alt="download-button"
                        />
                    </button>
                    </div>
</div>


                </div>
            </div>
        </div>
    );
};

export default Card;
