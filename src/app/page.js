'use client';


import Head from 'next/head'
import Image from 'next/image'

const axios = require('axios');

export default function Home() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = document.getElementById("prompt").value;
        if (prompt !== "") {
            const options = {
                method: 'POST',
                url: 'https://chatgpt-gpt-3-5.p.rapidapi.com/ask',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '2fd3ddc9c6msh4bde8da53ebbab6p1230a7jsn20f6ea68c97c',
                    'X-RapidAPI-Host': 'chatgpt-gpt-3-5.p.rapidapi.com'
                },
                data: {
                    query: prompt
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                document.getElementById("response").innerHTML = response.data.response
            } catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <>
            <div className='font-normal p-10'>
                <h1 className='text-3xl font-bold'>ChatGPT</h1>
                <br />
                <form>
                    <input className='p-1 rounded bg-black' placeholder='Type a prompt...' type='text' id="prompt" />
                    <button onClick={handleSubmit} type='submit' className='ml-2 pl-2 pr-2 pt-1 pb-1 border hover:bg-white hover:text-black'>Send Prompt</button>
                </form>
                <br />
                <div className='flex'>
                    GPT: <p id='response' className='ml-1'></p>
                </div>
            </div>
        </>
    )
}
