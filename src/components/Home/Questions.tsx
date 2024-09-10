import style from './home.module.scss'
import { useState } from "react";

const Questions = () => {
  const questions = [
    {
      question: "Какой у вас материал",
      answers:
        "Натуральные. В их числе шерсть, хлопок, лен. Данная категория изготавливается из сырья растительного и животного происхождения.",
    },
    {
      question: "Какой у вас материал",
      answers:
        "Натуральные. В их числе шерсть, хлопок, лен. Данная категория изготавливается из сырья растительного и животного происхождения.",
    },
    {
      question: "Какой у вас материал",
      answers:
        "Натуральные. В их числе шерсть, хлопок, лен. Данная категория изготавливается из сырья растительного и животного происхождения.",
    },
    {
      question: "Какой у вас материал",
      answers:
        "Натуральные. В их числе шерсть, хлопок, лен. Данная категория изготавливается из сырья растительного и животного происхождения.",
    },
    {
      question: "Какой у вас материал",
      answers:
        "Натуральные. В их числе шерсть, хлопок, лен. Данная категория изготавливается из сырья растительного и животного происхождения.",
    },
  ];

  const [answerOpen, setAnswerOpen] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index: number) => {
    setAnswerOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={style.Questions} id='FAQ'>
      <h2>Часто задаваемые вопросы</h2>
      <div className={style.boxs}>
        {questions.map((question, index) => (
          <div key={index} className={style.ques}>
            <div className={style.question}>
              <h4>{question.question}</h4>
              <button onClick={() => toggleAnswer(index)}>
                {answerOpen[index] ? "-" : "+"}
              </button>
            </div>
            {answerOpen[index] && (
              <p>{question.answers}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
