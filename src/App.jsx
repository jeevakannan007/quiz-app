import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const questions=[
  {
    question: "What's the famous in madurai?",
    options:["IceCream","Jigarthanda","Sarbath","Badam Milk"],
    answer:"Jigarthanda",
  },
  {
    question: "Where is Meenakshi Amman Temple located?",
    options:["Trichy","Ramanathapuram","Madurai","Chennai"],
    answer:"Madurai",
  },
  {
    question: "How many kilometers does Madurai cover in total?",
    options:["120km","80km","147km","300Km"],
    answer:"147km",
  },
  {
    question: "Who is the ex-Chief Minister of Tamil Nadu?",
    options:["Karunanithi","M.K Stalin","Edappadi palanisamy","Jayalaitha"],
    answer:"Edappadi palanisamy",
  },
  {
    question: "Where did the first human evolution take place?",
    options:["China","India","America","Lemuria"],
    answer:"Lemuria",
  },
  {
    question: "How many languages are present on Indian Rupee notes?",
    options:["24","14","6","120"],
    answer:"14",
  },

];

function App() {
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const[selectedAnswer,setSelectedAnswer]=useState(null);
  const[quizCompleted,setQuizCompleted]=useState(false);

  const handleAnswerClick=(options)=>{
    setSelectedAnswer(options);
  };

  const handleNextQuestions=()=>{
    if(!selectedAnswer)return alert("Please Select the Answer");
    if(selectedAnswer === questions[currentQuestion].answer)
    {
      setScore(score+1);
    }
    if(currentQuestion+1<questions.length)
    {
      setCurrentQuestion(currentQuestion+1);
      setSelectedAnswer(null);
    }
    else{
      setQuizCompleted(true);
    }
  };
 
  const handleRestart=()=>{
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };
  return(
    <div className="quiz-container">
      <h1>Quiz Application</h1>
      {quizCompleted?(
        <div className="result-section">
          <h2>Quiz Completed!!!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <p>{score >=4 ? "Well Done!!":"Try Hard!!"}</p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ):(
        <div className="quiz-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((Option,index)=>(
              <button
              key={index}
              onClick={()=>handleAnswerClick(Option)}
              className={selectedAnswer===Option ?"selected":""}>
                {Option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestions}>Next</button>
        </div>
      )}
      
      
      </div>
  );
}

export default App
