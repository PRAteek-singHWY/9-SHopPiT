import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  BrowserRouter,
  Link,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
//config will be used to setup url of backend
import config from "../config/config";
import { download } from "../assets";
import { upload } from "../assets";
//helpers
import { downloadCanvasToImage, reader, uploadCanvasToImage } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  Tab,
  CustomButton,
  FilePicker,
  FormField,
} from "../components";
import { menu, close } from '../assets'
import Canvas from '../canvas'

const Customiser = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate();

  //downloading designed shirt

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  //active editor is going to show that what are we changig the prompt the color or the file
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  //general loading state
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false)
  const [uploading, setUploading] = useState(false);
  //THIS NEW FUNCTION WILL SHOW TAB CONTENT BASED UPON THE CURRENTLY ACTIVE-TAB
  const handleClick = () => {
    // Add the code to close the File Picker here "THE X mark"
    setActiveEditorTab("");
  };
  //switch and  case to handle clicks when when we click a specific tab and once we click then we will be rendered towards that specifcic component which are written below as return statements for each clicked tab(case)
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        //using return here to return the appropriate component for specifc case
        return <ColorPicker handleClick={handleClick} />;
      case "filepicker":
        //show the desired image as logo or the entire gradient
        return (
          <FilePicker
            file={file}
            setFile={setFile}
            readFile={readFile}
            handleClick={handleClick}
          />
        );
      case "aipicker":
        //pick any desired image with help of dalle 2
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        );
      default:
        return null;
    }
  };

  //handle Submit for generating ai generated image
  const handleSubmit = async (type) => {
    //making a call to our backend from this function
    if (prompt) {
      try {
        // settting generatingImg to True to show "Asking AI...." in the AI Picker button
        setGeneratingImg(true);
        //response
        const response = await fetch(
          //fetching from api
          "http://localhost:8080/api/v1/dalle",
          //method
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //converting javascript object to JSON srtring
            //e.g
            // const data = { name: 'John', age: 25, isStudent: true };
            // const jsonString = JSON.stringify(data);
            // console.log(jsonString);
            // // Output: {"name":"John","age":25,"isStudent":true}

            //here the body gets it's value which is being used   in our backend
            body: JSON.stringify({ prompt }),
            //fetching finished
          }
        );

        //parsing the data --> getting data from backend
        const data = await response.json();
        console.log(data);




        //her we have passed the photo and type was laready passed when we clicked either "logo" or "full"
        // so basically here (type,result) are passed for function handleDecals
        handleDecals(type, `data:image/png;base64,${data.photo}`);
      } catch (error) {
        console.log(error)
      } finally {
        setGeneratingImg(false);
        setActiveEditorTab("");
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  //handling submit button to actually use backend by calling post route


  // form for name,photo,designName

  const [form, setForm] = useState({
    name: "",
    photo: "",
    designName: "",
  });

  const handleSubmitForm = async (event) => {
    
    event.preventDefault();
    //setting up the Form for all the enteerd detaisl and the designed canvas
    setForm({
      ...form,
      photo: uploadCanvasToImage(),
    });

    // here checking if phot0 has been provided by the ai and if we eneterd anme in our form
    if (form.name && form.designName && form.photo) {
      setLoading(true);
      setUploading(true);

      try {
        //calling post image route

        //from  here we are getting redirected to home

        const response = await fetch(
          "http://localhost:8080/api/v1/design",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        await response.json();
        navigate("/designs");
      } catch (error) {
        
        console.log(error);
        console.log("navigation")
      } finally {
        setLoading(false);
        setUploading(false);
      }
    }

  };


  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    // over up ⬆️ here (here decalType is Storing "logo" OR "stylishShirt" ) which are the objects with two properties each i.e ( stateProperty and  filterTab  {"" cmd+left_click on DecalTypes for more details ""})

    //⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️//
    // Now over here we are updating our [⭐️logodecal's⭐️] or [⭐️Fulldecal's⭐️] url and hence whatever image we select it get's displayed as simple as that,because now this  updated  value of ⭐️logoDecal⭐️ or ⭐️Full Decal⭐️ is being used by ⭐️Shirt⭐️ Component by getting updated Textures like this ⬇️
    // const logoTexture = useTexture(snap.logoDecal)
    // const fullTexture = useTexture(snap.fullDecal)
    // console.log(decalType.stateProperty)

    state[decalType.stateProperty] = result;
    //⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️//

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };
  //function is to handle if we are we currently showing the "logo" or "full" or "both simultaneously"
  //this tab name is simply the filter tab which is either equal to "logoshirt" or "StylishShirt" coming from "Constants.js"
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        // ⭐️"isLogoTexture"⭐️ is being set to true or false which is then again being used  by our shirt component
        state.isLogoTexture = !activeFilterTab[tabName];
        break;

      case "stylishShirt":
        // ⭐️"isLogoTexture"⭐️ is being set to true or false which is then again being used  by our shirt component
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
        break;
    }
    //below here here it is keeping a note of previous value of the state and then setting the new value to opposite of previous

    // The setActiveFilterTab function is updating the state by setting the new value to the opposite of the previous value for the specified tabName.

    //  breakdown of The code

    //1-> setActiveFilterTab is called with a function as its argument. This function receives the previous state (prevState) as its parameter

    //2-> Inside the function, a new object is created using the spread syntax (...prevState) to copy all the properties of the previous state.

    //3-> The value of the tabName property is updated by setting it to the opposite of its previous value (!prevState[tabName]).

    //4-> The updated object is then returned from the function, which will be used as the new state value for activeFilterTab.

    //5-> By using the functional form of setState, you ensure that the state update is based on the previous state value, preventing any potential conflicts or race conditions when updating the state.

    ///So if u didn't got the upper part then see it's very simple initially u can see the logo because your
    //  [ " logoShirt's " ] filter tab is true and becasue of that true part now when u pass the
    //  activeFilterTab(tab.name) in your tab component it shows "snap.color" as the background but the moment u click it gain u will see that the logo is going to disappear becuase when u clicked it  then the isLogoTexture turned to false (the opposite)
    //  and
    //  " this part " which m explaining right now and is below ⬇️ over here   set the "tabName" for every activeFilterTab to false if.e the opposite of previous which was true initially and then becasue of this the snap.colorred background turned again turnd to glassmorphism


    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  // so basically once this function is called then the inner functions inside this are also called and finally the states are changed which are noticed by our shirt component and therefore we see the changes depending upon if it's
  // // isLogoTexture or isFullTexture

  const readFile = (type) => {
    // reader is reading the file data as URL
    reader(file)
      //now using this "the promise" we have the value stored in result(as URL)
      .then((result) => {
        //passing the file(the file data as URL) to decals of the shirt depending on the (type-->logo || full)
        handleDecals(type, result);
        //reset the activeEditor State
        setActiveEditorTab("");
      });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };


  return (

    <AnimatePresence>
      <motion.section className="app transition-all ease-in bg-gradient-to-br from-[#880a71] via-[#ab6d25] to-[#802f16] ALL">




        <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation("left")}
        >
          <div className="flex items-center min-h-screen">
            <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => setActiveEditorTab(tab.name)}
                />
              ))}
              {generateTabContent()}
            </div>
          </div>
        </motion.div>




        <motion.div>
          <form onSubmit={handleSubmitForm}>
            <motion.div className="-top-2 left-5 absolute w-118 sm:w-64 h-32 flex  z-10 items-center text-white">
              <FormField
                LabelName="Your Name"
                type="text"
                name="name"
                placeholder="Firstname Lastname"
                value={form.name}
                handleChange={handleChange}
              />
            </motion.div>

            <motion.div className="top-20 left-5 absolute sm:w-64 w-[150px] h-32 flex z-10 items-center text-white">
              <FormField
                LabelName="Your Design"
                type="text"
                name="designName"
                placeholder="Design's Name"
                value={form.designName}
                handleChange={handleChange}
              />
            </motion.div>

            <motion.div className="filtertabs-container mb-20" {...slideAnimation("up")}>
              {FilterTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleClick={() => handleActiveFilterTab(tab.name)}
                />
              ))}

              <button className="download-btn" onClick={downloadCanvasToImage}>
                <img className="h-3/5 w-3/5 object-contain" src={download} alt="download_btn" />
              </button>

              <button
                className="w-40 h-14 flex justify-center items-center rounded-full glassmorphism cursor-pointer outline-none bg-yellow-500 text-white font-bold"
                type="submit"
                
              >
                <img className="h-8 w-10 object-contain" src={upload} alt="upload_btn" />
                <span>{uploading ? "Uploading..." : "Upload"}</span>
              </button>
            </motion.div>
          </form>
        </motion.div>
        <Canvas/>
      </motion.section>

    </AnimatePresence>



































  )
}
export default Customiser;
