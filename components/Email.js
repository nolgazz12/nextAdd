import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form"
import emailjs, {init, send} from '@emailjs/browser';
import styled from 'styled-components'
const USER_ID = "user_WPFsENVlPhYi769UjhzHr"
const SERVICE_ID = "service_sdyjlpj"
const TEMPLATE_ID = "template_btfblug"

    export default function ContactUs() {
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        init(USER_ID)
    },[]);

    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`);
        sendFeedback(SERVICE_ID, TEMPLATE_ID, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }
    const sendFeedback = (SERVICE_ID, TEMPLATE_ID, variables) => {
        emailjs.send(
            SERVICE_ID, TEMPLATE_ID,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                placeholder="name"
                {...register("name", {required: "Please enter your name",
                maxLength: {
                            value: 20,
                            message: "Please enter a name with fewer than 20 characters"}})} 
            /><br />
            {/* {errors.name && errors.name.message}<br /> */}

            <input
                placeholder="email"
                {...register("email",{ 
                        required: "Please enter an email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })
                }
            /><br/>
            {/* {errors?.email && errors?.email?.message}<br /> */}

            <textarea 
                placeholder="comment"
                {...register("comment",{required: true})} 
            /><br />
            {/* {errors.comment && "oops, you forgot your message!"}<br /> */}
            <input className='btn' type="submit" />
        </form>

        <style jsx>{`
    
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;  
                }
        input {
            width: 250px;
            height: 30px;
            margin-bottom: 20px;
            padding: 0px 10px;
            background-color: #DEDEDE;
            border: none;
            border-radius: 2px;
                }
        textarea{
            width: 500px;
            height: 150px;
            margin-bottom: 20px;
            padding: 0px 10px;
            background-color: #DEDEDE;
            resize:none;
            border: none;
            line-height:30px;
            overflow-y:hidden;
                }
        .btn {
            background-color: #46505d;
            color: #fff;
            
            }
                .btn:hover{
                    background-color: #DEDEDE;
                }
    `}
</style>

    </div>
);
    };

