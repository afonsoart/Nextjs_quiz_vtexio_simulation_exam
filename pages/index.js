import Head from "next/head";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Question from "../components/Question";
import ExerciseList from "../components/ExerciseList";

export function getServerSideProps() {
    const exercises = [
        { id: 0, title: "VTEX Learn" },
        { id: 1, title: "Conceito de Workspaces" },
        { id: 3, title: "Desenvolvimento de Apps VTEX IO" },
    ];

    return {
        props: {
            exercises,
        },
    };
}

export function getQuestions(exerciseId) {
    const questions = [
        {
            id: 0,
            exerciseId: 0,
            question:
                "what was the first fourth of july celebration to use fireworks?",
            answers: [1777, 1799, 1876, 1800, 1822],
            correctAnswer: "a",
        },
        
        {
            id: 1,
            exerciseId: 1,
            question:
                "Qual das opções a seguir descreve corretamente a relação entre os workspaces na plataforma VTEX IO e os usuários da loja?",
            answers: [
                "Os workspaces na plataforma VTEX IO permitem que os usuários da loja modifiquem o código diretamente, sem afetar a experiência dos outros usuários.",
                "Os workspaces na plataforma VTEX IO são ambientes de trabalho independentes que não interferem um no outro, permitindo testar diferentes versões de um tema antes de publicá-las.",
                "Os workspaces na plataforma VTEX IO são ambientes onde os usuários da loja podem criar várias versões de um tema, mas as mudanças feitas em um workspace afetam diretamente os outros workspaces.",
            ],
            correctAnswer: "b",
        },
        {
            id: 2,
            exerciseId: 0,
            question:
                "what year did the star-spangled banner become the national anthem?",
            answers: [1900, 1865, 1976, 1931, 1942],
            correctAnswer: "d",
        },
        {
            id: 3,
            exerciseId: 1,
            question:
                "Qual das opções a seguir descreve corretamente os tipos de workspace na plataforma VTEX IO?",
            answers: [
                "Development, Master, Production",
                "Production, Test, Staging",
                "Development, Staging, Live",
                "Development, Master, Deployment",
            ],
            correctAnswer: "a",
        },
       
    ];

    return questions.filter((items) => items.exerciseId === exerciseId);
}

export default function Home({ exercises }) {
    const initialState = {
        isExerciseShown: false,
        exerciseId: null,
        questions: [],
        isExerciseDone: false,
        score: 0,
    };

    const [state, setState] = useState(initialState);
    const { isExerciseShown, questions, isExerciseDone, score } = state;

    const showExercise = (id) => {
        setState({
            ...state,
            exerciseId: id,
            questions: getQuestions(id),
            isExerciseShown: true,
        });
    };
    const hideExercise = () => {
        setState(initialState);
    };
    const finishTest = (score) => {
        setState({
            ...state,
            isExerciseDone: true,
            score,
        });
    };

    return (
        <>
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Quiz app in next js" />
            </Head>
            <div className=" w-11/12 lg:w-1/2 m-auto mt-[120px] bg-gray-200 py-7 px-5 lg:py-8 lg:px-16 rounded-md shadow-2xl">
                <main className="">
                    {!isExerciseShown ? (
                        <ExerciseList
                            exercises={exercises}
                            func={showExercise}
                        />
                    ) : isExerciseDone ? (
                        <div>
                            <p className="my-4">
                                Você respondeu {score}/{questions.length}{" "}
                                de perguntas corretas!{" "}
                            </p>

                            <button
                                className="flex items-center gap-1 bg-[#f71963] py-2 px-5 rounded-full shadow-md text-white"
                                onClick={hideExercise}
                            >
                                <span>
                                    <FaArrowLeft />
                                </span>
                                <span>Back</span>
                            </button>
                        </div>
                    ) : (
                        <Question
                            questions={questions}
                            hideExercise={hideExercise}
                            finishTest={finishTest}
                        />
                    )}
                </main>
            </div>
        </>
    );
}
