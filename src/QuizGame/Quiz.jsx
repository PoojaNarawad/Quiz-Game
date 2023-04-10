
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
      question: "What is the capital city of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      answer: ["Paris"]
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Kilimanjaro", "Everest", "Denali", "Fuji"],
      answer: ["Everest"]
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Rembrandt"],
      answer: ["Leonardo da Vinci"]
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