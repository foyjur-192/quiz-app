import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from './Hook/Quiz';
import '../Pages/QuizD.css';
import { useNavigate } from 'react-router';

export default function QuizD() {

    const {questions,setQuestions,score,setScore,setExist} = useContext(QuizContext)
    const [options, setOptions] = useState()
   const[currentQues, SetCurrentQues] = useState(0)


    useEffect(() => {
     console.log(questions);
    setOptions(questions && 
    handleShuffle ([
    questions[currentQues]?.correct_answer,
    ...questions[currentQues]?.incorrect_answers,

]));
    
    }, [questions, currentQues]);

const handleShuffle = (optioned) => {
return optioned.sort(()=>Math.random() - 0.5);
}


return (
        <div className='w-full lg:pt-300 pt-200 flex justify-center item-center'>
         {questions ? (
            <>
        
             <Box currentQues={currentQues}
             SetCurrentQues={SetCurrentQues}
             questions={questions}
             options={options}
            correct = {questions[currentQues]?.correct_answer} 
             score={score}
             setScore={setScore}
             setQuestions={setQuestions}
             setExist = {setExist}
             
             
             
             />
            </>
        ): (
            <CircularProgress
            style={{margin:100}}
            color="inherit"
            size = {150}
            thickness={1}
            
            
            
            />
        )
    
    
    }     
               
                
         
        </div>
    );
};


const Box = ({questions,score,setScore,correct,currentQues,SetCurrentQues,options,setExit}) => {
    console.log(score);
    const [selected, setSelected] = useState();
const[error, setError] = useState(false);


const handleSelect = (e) =>{
if(selected===e && selected===correct){
    return "select";
}else if (selected===e && selected!==correct){
    return "wrong"
}else if(e===correct){
return "select";
}
};
 
console.log(handleSelect);
const handleCheck = (e) => {
    setSelected(e);
    if (e===correct) setScore(score + 1);
    setError(false)
}



const handleNext = () => {
if(currentQues > 10 ){
     setExit(true);
}else if (selected){
    SetCurrentQues(currentQues + 1 )
    setSelected();
}else{
    setError('Please select an option First')
}
    
}
const handlePrevious = (event) => {
    event.preventDefault();
    let new_current_questions = Math.max(currentQues - 1, 0);
    SetCurrentQues(new_current_questions);
  };



    return (
        <div className=' lg:w-[50%]  w-[80%] min-h-[700px] lg:mt-40 mt-24 bg-gray-100 border box-shadow lg:p-6 p-2'>
      <div className=''>
      <div className='flex justify-between lg:mb-10 mb-5'>
                <div className='lg:text-xl text-xm'>General Knowledge</div>
                <div className='lg:text-xl text-xm font-medium'>Score: {score}</div>
             </div>
    <h2 className='p-2 font-medium lg:text-2xl'>Question No-{currentQues + 1}</h2>
 
    <h1 className='font-bold lg:text-2xl text-xl over-flow-hidden mb-12'>{questions[currentQues].question}</h1>
    <p className='mb-3 text-red-400'>{error}</p>
    {
        options && 
        options.map( e => (
        <button
        className={`btnStyle ${selected && handleSelect(e)}`}
        onClick={() => handleCheck(e)}
        key={e}
        disabled={selected}
        >

          {e}

        </button>

        ))
    }

    <div className='flex justify-between mt-5'>
    <button className='btn  border ' onClick={handlePrevious}>Previous</button>
    <button className='btn bg-cyan-800' onClick={handleNext}>Next</button>
    </div>
  
  




    </div>
        </div>
    )
}