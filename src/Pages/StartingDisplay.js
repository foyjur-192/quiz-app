import React, { useContext } from 'react';
import { QuizContext } from './Hook/Quiz';


export default function StartingDisplay(){
const {setStart} = useContext(QuizContext)
  

    return (
        <div>
<section class="text-gray-600 body-font w-full h-full flex justify-center item-center lg:mt-40 mt-16">
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
    <h2 class="text-5xl text-gray-800 tracking-widest font-bold mb-5">General Knowledge Quiz </h2>
    <h1 class="lg:text-2xl font-normal title-font mb-4 text-gray-900">Test Your General Knowledge playing quiz game,The simple question  short but effective</h1>
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
  </div>
  
  <button onClick={() => setStart(true)} class="flex mx-auto mt-16 text-white bg-cyan-800 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-300 rounded text-lg">Start Quiz Now</button>
</div>
</section>
        </div>
    );
}




