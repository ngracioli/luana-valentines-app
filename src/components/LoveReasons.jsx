import { useEffect, useRef } from "react";

function LoveReasons() {
    const reasons = ["teste1", "teste2", "teste3", "teste4", "teste5"];
    const listRef = useRef(null);

    useEffect(() => {
        if (!listRef.current) return;
        const items = listRef.current.querySelectorAll("li[data-aos]");
        items.forEach((item, i) => {
            item.setAttribute("data-aos-delay", String(i * 120));
        });
        if (window.AOS && typeof window.AOS.refresh === "function") {
            window.AOS.refresh();
        }
    }, []);

    return (
        <section className="p-6 sm:p-8 bg-gradient-to-b rounded-xl max-w-4xl mx-auto mb-18">
            <h2
                className="text-3xl font-semibold text-center text-pink-500 mb-8"
                data-aos="zoom-in"
            >
                10 Razões Pelas Quais Eu Te Amo
            </h2>
            <ul className="space-y-4" ref={listRef}>
                {reasons.slice(0, 10).map((r, i) => (
                    <div data-aos="fade-right" key={i}>
                        <li
                            className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-200"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-pink-500 text-3xl">❤️</span>
                                <span className="text-xl text-gray-700">{r}</span>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    );
}

export default LoveReasons;
