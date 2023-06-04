export default function NavigationButton({ state, moveQuestion }) {
    const { currentQuestion, answers, numberOfQuestions } = state;

    const buttonStyles = {
        disabled:
            "bg-[#f71963] text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed",
        active: "bg-[#f71963] hover:scale-[104%] text-white font-bold py-2 px-4 rounded-full transition-all",
    };

    const getButton = (direction) => {
        if (direction === "next") {
            return (
                <button
                    onClick={() => moveQuestion("next")}
                    className={!answers[currentQuestion] ? x : y}
                >
                    {currentQuestion !== numberOfQuestions - 1
                        ? "Next"
                        : "Finish"}
                </button>
            );
        } else {
            if (currentQuestion === 0) {
                return <button className={x}>Prev</button>;
            } else {
                return (
                    <button onClick={() => moveQuestion("prev")} className={y}>
                        Prev
                    </button>
                );
            }
        }
    };
    const { disabled: x, active: y } = buttonStyles;
    return (
        <div className="flex gap-2 m-2">
            {getButton("prev")}
            {getButton("next")}
        </div>
    );
}
