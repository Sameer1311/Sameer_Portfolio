"use client";
import { Button } from "@/components/ui/button";
import { LockKeyholeIcon ,Mail , User2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import DoneComponent from "./Done";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [To, setTo] = useState("negisameer72@gmail.com")
  const [Done, setDone] = useState(false)
  
  const handleSubmit =async(e)=>{
    try{
      e.preventDefault() ; 
      const res = await fetch("/api/form",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({Name , Email  , Message , To})
      })
      await res.json()
      if(res){
        setName("")
        setEmail("")
        setMessage("")
        setDone(true)
        setTimeout(()=>{
          setDone(false)
        },10000)
      }else{
        alert("Failed to send message to user ")
      }
    }
    catch(error){
      console.log("error occurred ",error)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 justify-center w-full h-full p-4">
      <hr className="w-full border-gray-600" />
      <h1 className="md:text-3xl text-2xl text-gray-300 font-bold">Contact Me</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
      <span className="flex  border-2 items-center justify-between  border-white bg-transparent  rounded-3xl">
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-3  bg-transparent text-white  outline-none"
          required
          suppressHydrationWarning
        />
        <User2 width={40}/>
      </span>
        <span className="flex  border-2 items-center justify-between  border-white bg-transparent  rounded-3xl">
        <input
          type="email"
          suppressHydrationWarning
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="p-3 bg-transparent text-white  outline-none"
          required
        />
        <Mail width={40}/>
        </span>
        <span className="flex  border-2 items-center justify-between  border-white bg-transparent  rounded-3xl">
        <input
          type="email"
          value={To}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Developer"
          suppressHydrationWarning
          className="p-3 text-red-400 outline-none"
          disabled
        />
        <LockKeyholeIcon width={40}/>
        </span>
        <textarea
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows={4}
          className="p-3 border-2 border-white bg-transparent text-white rounded-3xl outline-none"
          required
          
        />
        <Button type="submit" onKeyDown={(e)=>e.key === "Enter" && handleSubmit()} className="font-bold"  >Send</Button>
      </form>
      {Done  && <DoneComponent/>}
    </div>
  );
};

export default ContactForm;
