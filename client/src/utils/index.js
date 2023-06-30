//utility functions 
//  are functions we gonna reuse
// FOR FILE SAVING
import FileSaver from "file-saver"
import axios from "axios"
import jwt_decode from "jwt-decode"
//using filesaver
export async function downloadImage(name,photo){
FileSaver.saveAs(photo,`download-${name}.jpg`)
}

//fetching our google response and parsing the data with dependency 
export const createOrGetUser = async(response)=>{
    const decoded = jwt_decode(response.credential);
    const { name, picture, sub } = decoded;

const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture
}
await axios.post("http://localhost:5173/api/auth",user)
}