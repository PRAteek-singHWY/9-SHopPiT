import { proxy } from "valtio";

// React Context allows you to share data between different components without passing it through each intermediate component manually. It provides a way to define data at a higher level and make it accessible to any component that needs it.//

//so consider this state function as context
//sobasically passing some data with values as booleans for specific paremeters
const state = proxy({
intro:true,
color:"#EFBD48",
isLogoTexture:true,
isFullTexture:false,
logoDecal: "./shoppitB.png",
fullDecal: "./shoppitB.png"


});
export default state