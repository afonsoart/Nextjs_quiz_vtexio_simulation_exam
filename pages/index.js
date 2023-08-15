import Head from "next/head";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Question from "../components/Question";
import ExerciseList from "../components/ExerciseList";

export function getServerSideProps() {
    const exercises = [
        { id: 0, title: "Iniciar" },
        
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
            id: 1,
            exerciseId: 0,
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
                "Qual das opções a seguir descreve corretamente os tipos de workspace na plataforma VTEX IO?",
            answers: [
                "Development, Master, Production",
                "Production, Test, Staging",
                "Development, Staging, Live",
                "Development, Master, Deployment",
            ],
            correctAnswer: "a",
        },
        {
            id: 3,
            exerciseId: 0,
            question:
                "O comando para criar um Workspace de Produção no VTEX é:",
            answers: [
                "VTEX use {workspaceName} --production",
                "VTEX create {workspaceName} --production",
                "VTEX deploy {workspaceName} --production",
                "VTEX start {workspaceName} --production",
            ],
            correctAnswer: "a",
        },
        
        {
            id: 4,
            exerciseId: 0,
            question:
                "Quais desta alternativas é a alternativa correta Sobre o uso de blocos básicos em VTEX IO, escolha a opção verdadeira:",
            answers: [
                "Para utilizar blocos em um tema é necessário que o aplicativo daquele bloco esteja declarado no arquivo manifest do tema.",
                "Properties ou props são formas de definir que um bloco será child de outro bloco.",
                "É possível utilizar o @ para instanciar um bloco. Por exemplo: info-card@home.",
                "Dizer que um bloco é filho de outro quer dizer que ele irá herdar as características do pai. ",
            ],
            correctAnswer: "a",
        },

        {
            id: 5,
            exerciseId: 0,
            question:
                "Sobre apps em VTEX IO, quais desses tipos não é possível criar:",
            answers: [
                "Store apps: apps que podem ser comprados pelos usuários nas lojas.",
                "Storefront apps: apps que renderizam componentes para o front de uma loja.",
                "Pixel apps: que coletam dados e enviam para um serviço de terceiros.",
                "Admin apps: apps que funcionam como um novo módulo no admin da loja.",
            ],
            correctAnswer: "a",
        },

        {
            id: 6,
            exerciseId: 0,
            question:
                "What does the vtex url command do in the context of VTEX IO?",
            answers: [
                "Generates a random URL for testing purposes.",
                "Displays the base URL for the current account only.",
                "Prints the base URL for the current account, workspace, and environment.",
                "Sets up a new URL for the VTEX development environment."
            ],
            correctAnswer: "c",
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
