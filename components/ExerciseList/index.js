export default function ExerciseList({ exercises, func }) {
    return (
        <>
            <h3 className="text-2xl font-medium text-center mb-6 text-[#f71963]">Quiz VTEX IO</h3>
            <ul>
                {exercises.map((exercise) => (
                    <li className="my-3 " key={exercise.id}>
                        <button className="w-full py-3 rounded-full text-lg font-medium px-4 text-white leading-6 bg-[#f71963] hover:opacity-80 hover:scale-[102%] transition-all duration-500 " onClick={() => func(exercise.id)}>
                            {exercise.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
