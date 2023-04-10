
//   return (
//     <>
//     div className="heading">
// 			<	<main>
// 					<h4>Your QuizGame Questions Are Here...</h4>
// 					<p className='subheading'>Play answering</p>
// 				</main>
// 			</div>
//         <div className='QuestionsList'>
//       {questionIndex < questions.length ? (
//         <>
//           <h2>{questions[questionIndex].question}</h2>
//           <ul>
//             {questions[questionIndex].options.map((option, index) => (
//               <li key={index} onClick={() => handleAnswer(option)}>
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </>
//       ) : (
//         <div>
//           <h2>Quiz completed!</h2>
//           <p>Your score is {score} out of {questions.length}.</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default QuizGame;


import React, { useState } from 'react';
import "./quiz.css"

const QuizGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const questions = [
    {
      question: "What's the fastest land animal?",
      options: ["Cheetah", "Tiger", "Lion", "Monkey"],
      answer: ["Cheetah"]
    },
    {
      question: "“Stars and Stripes” is the nickname of the flag of which country?",
      options: ["France", "Australia", "USA", "India"],
      answer: ["USA"]
    },
    {
      question: "What is the capital city of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      answer: ["Paris"]
    },
    {
      question: "How many legs does a spider have?",
      options: ["7", "9", "5", "8"],
      answer: ["8"]
    },
    {
      question: "What country is responsible for creating the Olympic Games?",
      options: ["Greece", "Canada", "Madrid", "India"],
      answer: ["Greece"]
    },
  ];

  const handleOptionChange = (event) => {
    const option = event.target.value;
    const isSelected = event.target.checked;
    let newSelectedOptions = selectedOptions.slice();

    if (isSelected) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions = newSelectedOptions.filter(o => o !== option);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleAnswer = () => {
    const selectedAnswer = selectedOptions.sort();
    const correctAnswer = questions[questionIndex].answer.sort();

    if (JSON.stringify(selectedAnswer) === JSON.stringify(correctAnswer)) {
      setScore(score + 1);
    }

    setSelectedOptions([]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <>
    <div className="heading">
     <main>
      <h4>Your QuizGame Questions Are Here...</h4>
 		  <p className='subheading'>Play answering</p>
     </main>
    </div>
      <div className='QuestionsList'>
      {questionIndex < questions.length ? (
        <>
          <h2>{questions[questionIndex].question}</h2>
          <ul>
            {questions[questionIndex].options.map((option, index) => (
              <div key={index}>
                <input type="checkbox" value={option} onChange={handleOptionChange} checked={selectedOptions.includes(option)} />
                {option}
              </div>
            ))}
          </ul>
          <button onClick={handleAnswer} className='button'>Submit</button>
        </>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p className='successMessage'>Your score is {score} out of {questions.length}.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default QuizGame;