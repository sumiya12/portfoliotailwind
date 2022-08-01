import React from "react";
import Button from './Button'
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <div className="text-center flex flex-col items-center pb-16 pt-12">
        <h1 className="text-black text-[3rem] font-medium">Get in touch</h1>
        <p className="text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4">
          If you want contact me you should send me mail for this form.
        </p>
      </div>
      <ContactForm />
      {/* <form className='flex flex-col mb-24 space-y-4 p-6 shadow-lg' action="mailto:sumiya.udval@gmail.com" method="post">
            <label className='flex flex-col text-lg font-medium text-black'>
                Email
                <input type={"email"} enctype="text/plain" placeholder="Please enter email" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>

            <label className='flex flex-col text-lg font-medium text-black'>
                Name
                <input type={"text"} name="FirstName" placeholder="Please enter Name" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>
            <label className='flex flex-col text-lg font-medium text-black'>
                Email
                <textarea placeholder="Please enter message" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>

            <div className='flex items-center justify-center'>
            <Button text={"submit"} className="bg-black mt-6 px-10 w-fit py-1.5"/>
            </div>
        </form> */}
    </div>
  );
};

export default Contact;
