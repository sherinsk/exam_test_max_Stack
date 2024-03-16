import React from "react";
import bgImg from '../assets/cyber-bg.png';

const Hero=()=>{return(
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mt-20">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <p className="text-2xl">Unique Sequencing & Production</p>
                <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
                <p className="text-2xl">This is our tech brand</p>
                <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
            </div>
            <div>
                <img src={bgImg}/>
            </div>
        </div>
    </div>
)
}

export default Hero;