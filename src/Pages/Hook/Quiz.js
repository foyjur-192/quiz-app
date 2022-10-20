import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {createContext} from 'react'

const QuizContext = createContext();

export default function Quiz(props){
    const [start, setStart] = useState(false);
    const [previous, setPrevious] = useState(false);
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const [exit, setExit] = useState(false);
   
   

   useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuestions(data.results));
           
    }, [])

    return(
        <QuizContext.Provider value={{start,previous,setStart,setPrevious,questions,setQuestions,score,setScore,exit, setExit}}>
        {props.children}
        
        </QuizContext.Provider>
    )
}

export {QuizContext};