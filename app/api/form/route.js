import nodemailer from "nodemailer" ; 
import { NextResponse } from "next/server";

export async function POST(req ){
    const {Name , Email  , Message , To}=await req.json() ; 
    const transporter = nodemailer.createTransport({
        service:"gmail" ,
        auth:{
            user:process.env.EMAIL_USER  ,
            pass:process.env.EMAIL_PAS   ,
        }
    })

    const mailOptions = {
        from : Email , 
        to : To , 
        subject : `Message from ${Name}` , 
        text : Message,
        html:`
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Message:</strong><br/>${Message}</p>
      `,
    }
    await transporter.sendMail(mailOptions)
    return NextResponse.json({success:true , message :" email send successfully"})
}

