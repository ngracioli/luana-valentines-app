import { useState, useEffect } from "react";

function LoveMessageBox() {
    const phrases = [
        "Você é o amor da minha vida.",
        "Eu te amo de um jeito que\nnem sei explicar.",
        "Só de te olhar, meu coração sorri.",
        "Eu me apaixono mais por você\na cada dia.",
        "Com você, tudo faz sentido.",
        "Você é o melhor detalhe\nda minha vida.",
        "Tudo fica melhor quando\n eu estou com você.",
        "Você é o motivo do meu sorriso.",
        "Seu amor me faz ser melhor.",
        "A vida ficou mais linda depois\nque você chegou.",
        "Te amar é minha parte preferida\ndo meu dia.",
        "Você me completa por inteiro.",
    ];
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const nextPhrase = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((index + 1) % phrases.length);
            setFade(true);
        }, 300);
    };

    return (
        <section
            className="text-center py-10 px-2 sm:px-6 rounded-2xl shadow-xl max-w-2xl w-full mx-auto border-4 border-pink-100"
            data-aos="zoom-in"
        >
            <h2 className="text-3xl font-bold text-pink-500 mb-8 flex items-center justify-center gap-2 flex-wrap">
                Minhas mensagens de amor para você
                <span className="inline-block">💖</span>
            </h2>
            <div className="bg-pink-50 p-6 rounded-2xl text-pink-400 border-pink-200 mb-8 shadow-sm border flex items-center justify-center min-h-[120px]">
                <p
                    className={`text-2xl italic font-medium max-w-md mx-auto transition-opacity duration-300 ${
                        fade ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {phrases[index].split("\n").map((line, i) => (
                        <span key={i}>
                            {line}
                            {i !== phrases[index].split("\n").length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            <button
                onClick={nextPhrase}
                className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
                Mostrar outra
            </button>
            <div className="mt-6 text-pink-400 text-sm italic">
                "Nunca haverá frases suficientes para expressar o quanto eu te
                amo."
            </div>
        </section>
    );
}

export default LoveMessageBox;
