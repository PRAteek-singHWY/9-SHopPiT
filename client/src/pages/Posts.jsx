import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { BrowserRouter, Link, Route, Routes }
    from "react-router-dom"
//config will be used to setup url of backend
import config from "../config/config";
import { download } from "../assets";

//helpers
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
    AIPicker,
    ColorPicker,
    Tab,
    CustomButton,
    FilePicker,
    FormField,
    Card,
    Loader,
} from "../components";

const Posts = () => {
    //just to check loading and if we need to use Loader (the imported componenet)
    const [loading, setLoading] = useState(false);
    //all posts
    const [allPosts, setAllPosts] = useState(null);
    //searching
    const [searchText, setSearchtext] = useState("");
    const [searchedResults, setSearchedResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const snap = useSnapshot(state);

    const RenderCards = ({ data, title }) => {
        console.log(data)
        if (data?.length > 0) {
            return data.map((post) => (
                <Card
                    key={post._id}

                    //card with post data i.e images genrated by ai if data is present
                    //passing all of the post data to each individual Card
                    //each entity (i.e post ._id,postt's photo)of data is being spreaded using ...post(spread Operator)
                    //this method we used even in portfolio to simple be able to access all values (i.e all values and properties of post like name, _id, photo)
                    {...post}
                />
            ));
        }
        //  otherwise if no data then simply show the title for no resullts or no posts from the title parameter in render Crds
        return (
            <h2 className="mt-5 font-bold text-[#F59E0B] text-xl uppercase ">
                {title}
            </h2>
        );
    };


    //-FETCH-POSTS-//
    useEffect(() => {
        // The useEffect hook allows you to perform tasks that cannot be done directly inside the return statement or need to be executed at specific times during the component's lifecycle.

        const fetchPosts = async () => {
            // setLodaing to true cause we are doing something and it's something which is kind of uk loading
            setLoading(true);

            try {
                //fetching
                const response = await fetch(
                    "http://localhost:8080/api/v1/design",

                    {
                        //method
                        method: "GET",
                        headers: {
                            "Content-Type": "aapplication/json",
                        },
                    }
                );
                if (response.ok) {
                    const result = await response.json();
                    //showing newsest posts at top that's why reversing
                    // console.log(result.data)
                    setAllPosts(result.data.reverse());
                }
            } catch (error) {
                console.log(error)
        console.log("navigation")

            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);




    //--SEARCH--//


    const handleSearchChange = (event) => {
        // clear timeout everytime when we start searching something new
        clearTimeout(searchTimeout);
        setSearchtext(event.target.value);

        //set search time out state
        setSearchTimeout(
            //if multiple characters were typed within time limit of 500 milliseconds then we won't we making those multiple serach requets every time
            setTimeout(() => {
                const searchResults = allPosts.filter(
                    (item) =>
                        //searching by the name of uploader or by the name of the design
                        item?.name?.toLowerCase()
                            .includes(searchText.toLowerCase())

                        ||
                        item?.designName?.toLowerCase()
                            .includes(searchText.toLowerCase())
                );
                setSearchedResults(searchResults);
            }, 200)
        );
    };



    //--SEARCH--//




    return (
        <AnimatePresence>
            <motion.section className=" mx-auto p-10 sm:p-3   transition-all ease-in bg-gradient-to-br from-orange-400 via-[#842eb0] to-[#de691a]"
            >
                <motion.div  >
                    <h1 className="font-extrabold text-black text-[32px]">
                        The Designs Era
                    </h1>
                    <p className="mt-2 text-[#252a2e] text-[16px] max-w-[500px]">
                        Browse Through a wide range of imaginative and Visually
                        attractive cloths designs by  <span className="text-bold
                         text-[#ede9e6] text-1xl">Creative Designers Like Y-ö-U 🙂</span>
                    </p>
                </motion.div>

                <motion.div className="md:absolute md:mb-0 -mb-6 z-10 flex flex-col justify-between right-5 top-32">
                    {/* <motion.div >
                        <Link to="/customise">
                            <CustomButton
                                type="filled"
                                title="Create Your own"
                                handleClick={() => (state.intro = false)}
                                CustomStyles="w-fit px-4 py-2.5 mt-4 font-bold text-sm"
                            />
                        </Link>


                    </motion.div> */}


                   





                </motion.div>
                <motion.div className="mt-16"

                >
                    <FormField
                        LabelName="Search Posts"
                        type="text"
                        name="text"
                        placeholder="Search Posts"
                        value={searchText}
                        handleChange={handleSearchChange}
                    />
                </motion.div>


                <motion.div className="mt-10 "
                >
                    {loading ? (
                        <div className="flex justify-center items-center ">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {searchText && (
                                <h2 className="font-medium text-2xl text-[#F59E0B]">
                                    Showing results for{" "}
                                    <span className="text-[#F59E0B]">
                                        {searchText}
                                    </span>
                                </h2>
                            )}
                            <div className="grid lg:grid-cols-4 
                            md:grid-cols-3
                            sm:grid-cols-2  grid-cols-1 gap-3">
                                {searchText ? (
                                    <RenderCards
                                        data={searchedResults}
                                        title="No search results found"
                                    />
                                ) : (
                                    <RenderCards
                                        data={allPosts}
                                        title="No Posts Found"
                                    />
                                )}
                            </div>
                        </>
                    )}
                </motion.div>
            </motion.section>
        </AnimatePresence>
    );
};

export default Posts;
