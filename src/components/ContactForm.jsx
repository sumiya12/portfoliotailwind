import React, { useState } from "react";

const ContactForm = ({}) => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col mb-24 space-y-4 p-6 shadow-lg'>
      <div>
        <label htmlFor="name" className='flex flex-col text-lg font-medium text-black'>Name:</label>
        <input type="text" id="name" required placeholder="Please enter Name" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
      </div>
      <div>
        <label htmlFor="email" className='flex flex-col text-lg font-medium text-black'>Email:</label>
        <input type="email" id="email" placeholder="Please enter Email" required className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
      </div>
      <div>
        <label htmlFor="message" className='flex flex-col text-lg font-medium text-black'>Message:</label>
        <textarea id="message"  placeholder="Please enter message" required  className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400"/>
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;