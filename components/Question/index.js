import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Answers from "./Answers";
import NavigationButton from "./NavigationButton";

export default function Question({ questions, hideExercise, finishTest }) {
    const initialState = {
        currentQuestion: 0,
        answers: [],
        numberOfQuestions: questions.length,
        correctAnswers: [],
    };
    const [state, setState] = useState(initialState);
    const { currentQuestion, answers, numberOfQuestions } = state;
    const question = questions[currentQuestion];


    const submitAnswer = () => {
        let totalScore = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].correctAnswer) totalScore++;
        }
        finishTest(totalScore);
    };
    const answerQuestion = (answer) => {
        answers[currentQuestion] = answer;
        setState({
            ...state,
            answers,
        });
    };

    const moveQuestion = (direction) => {
        switch (direction) {
            case "next": {
                if (currentQuestion === numberOfQuestions - 1) {
                    submitAnswer();
                    return;
                }
                setState({
                    ...state,
                    currentQuestion: currentQuestion + 1,
                });
                break;
            }
            case "prev": {
                setState({
                    ...state,
                    currentQuestion: currentQuestion - 1,
                });
            }
        }
    };

    return (
        <div className=" space-y-6">
            <button className="flex items-center gap-2 bg-[#f71963] py-2 px-6 rounded-full shadow-md text-white hover:opacity-80 hover:scale-[104%] transition-all" onClick={hideExercise}>
                <span>
                    <FaArrowLeft />
                </span>
                <span>Voltar</span>
            </button>
            <h1 className="text-2xl mt-2 capitalize">{`${
                state.currentQuestion + 1
            }. ${question.question}`}</h1>
            <Answers
                answers={question.answers}
                answerQuestion={answerQuestion}
                state={state}
            />

            <NavigationButton state={state} moveQuestion={moveQuestion} />
        </div>
    );
}
