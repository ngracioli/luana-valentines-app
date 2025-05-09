import { useRef } from "react";

function LoveReasons() {
    const reasons = ["teste1", "teste2", "teste3", "teste4", "teste5"];
    const listRef = useRef(null);

    return (
        <section className="p-6 sm:p-8 bg-gradient-to-b rounded-xl max-w-4xl mx-auto mb-18">
            <h2
                className="text-3xl font-semibold text-center text-pink-500 mb-8"
            >
                10 Razões Pelas Quais Eu Te Amo
            </h2>
            <ul className="space-y-4" ref={listRef}>
                {reasons.slice(0, 10).map((r, i) => (
                    <li
                        key={i}
                        className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-pink-500 text-3xl">❤️</span>
                            <span className="text-xl text-gray-700">{r}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default LoveReasons;
