import React from 'react'
import { useState, useRef, } from "react"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';

import {
  BrowserRouter,
  Link,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";


const Contact = ({size,merchant,wait}) => {
  const navigate = useNavigate();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
   
    
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form, [name]: value
    })
  }


  const sendConfirmationEmail = (name, email) => {
    // Replace with your own service and template IDs
    const serviceId = 'service_il0ueg4';
    const templateId = 'template_wcz1e4g';
    const userId = 'd6CBqgeqPCYFCn7V3'; // You can get this from your emailjs account settings
  
    // Prepare the email parameters
    const templateParams = {
      from_name: 'ShopP_iT', // Replace with your name or organization name
      from_email: "prateek23022004@gmail.com",
      to_name: name,
      to_email: email,
      message: 
`This is a Confirmation message regarding your Order, 
   
    Congratulations, 

    Your ⭐️FUTURISTIC⭐️ Order with,

    🥼 Size_Fit              -> ${size}
    🛍️ Booked Merchant       -> ${merchant}
    ⏰ Your Waiting Period   -> ${wait} 

    has been Placed SuccessFully,   
     
    The Merchant will Contact You Soon Once
    { He's/She's } Free to take Your order 
    and Complete It With Ultimate Perfection

    🙂Happy Designing🙂

    Thank You
    `
    };
  
    // Send the email
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Handle any further actions after the email is sent, such as showing a confirmation message
        navigate("/confirmed")
        .alert("U r being redirected to Confirmation Page")
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle any errors that occur during email sending
      });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get the entered name and email from the form
    const enteredName = form.name;
    const enteredEmail = form.email;
  
    // Call the function to send the confirmation email with the custom message
    sendConfirmationEmail(enteredName, enteredEmail);
  
    // Clear the form or perform any other necessary actions
    setForm({
      name: '',
      email: '',
    });
  };
  




// const handleSubmit = (event) => {
//   event.preventDefault();
//   setLoading(true);
//   emailjs
//     .send(
//       "service_4zxat2m",
//       "template_vcwd3jd",
//       {
//         from_name: 'Prateek Singh',
//         to_name: form.name,
//         from_email: 'prateek23022004@gmail.com',
//         to_email: form.email,
//       },
//       "0wpAdlRVinT1_OUKf"
//     )
//     .then(
//       () => {
//         setLoading(false);
//         alert('Thank You, we will converse A.S.A.P');

//         setForm({
//           name: '',
//           email: '',
//         });
//       },
//       (err) => {
//         setLoading(false);
//         console.log(err);
//         alert('Uh uhh something went wrong,Please Try Again Later');
//       }
//     );
// };












console.log(form.email)
console.log(form.name)
  return (

    <div className="  flex gap-4
   ">

      
      <motion.div 

      
        className=" bg-bg-black-100  flex flex-col rounded-2xl"
      >
        
        <h2 className="text-1xl text-black-300 sm:-mt-1 -mt-5">
        OrDeR
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-black  font-medium mb-2 sm:mt-1 -mt-4">Your Name</span>
            {/* //--Name--// */}
            <input
              placeholder="Your good name 💛"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-2 px-2 
            placeholder:text-secondary
            text-black rounded-lg outline-none sm:mt-1 -mt-2.5 sm:w-[200px] sm:h-[40px] w-[180px] h-[25px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black  font-medium mb-2">Your Email</span>
            <input
              placeholder="What's ur Email?"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-2 px-2 
           placeholder:text-secondary
            text-black rounded-lg outline-none
            sm:mt-1 -mt-2.5 sm:w-[200px] sm:h-[40px] w-[180px] h-[25px]
            
            "
            />
          </label>
                 </form>


            <button
            type="submit"
              onClick={handleSubmit}
              className="  px-4  ml-2
                py-2.5 font-bold text-sm bg-black text-red-500 rounded-full sm:mt-6 sm:top-52 top-24 sm:w-[170px]
                 w-[80px] h-[34px] flex items-center justify-center mt-2"
            >Buy</button>
      </motion.div>
      {/* //loading the form */}


      
    </div>
  )
}

export default Contact