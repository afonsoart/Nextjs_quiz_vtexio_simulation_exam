export default function Answer(props) {
    const { icon, answerQuestion, answerText, answerValue } = props;
    return (
        <li>
            <button
                className="p-2 flex items-center gap-2 hover:opacity-70 rounded-full"
                onClick={() => answerQuestion(answerValue)}
            >
               
                <div className="flex gap-3 text-left">
                    <div>
                        <span className="flex mt-1 text-[#28a745] border border-gray-500 rounded-full text-left">{icon}</span>
                    </div>
                    <span className=" text-xl font-semibold uppercase">{`${answerValue}`}</span> 
                    <span className=" text-lg ">{`${answerText}`}</span>
                </div>
            </button>
            
        </li>
    );
}
