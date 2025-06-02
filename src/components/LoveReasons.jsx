import { useEffect, useRef } from "react";

function LoveReasons() {
    const reasons = [
        "O jeito carinhoso que você tem, mesmo em pequenas coisinhas que você não percebe",
        "Seus olhinhos enormes fofinhos que me deixam completamente bobinho",
        "A maneira que você sorri e vira o rostinho quando tá com vergonha",
        "Seu abraço que me acalma sempre e me deixa sentir seu cheirinho",
        "Seu jeito de me elogiar e me deixar todo bobo",
        "O toque macio e delicado da sua mão em mim",
        "Seu estilo todo fofinho parecendo que saiu de um dorama ou as vezes de um cemitério",
        "O quanto você parece uma bonequinha com sua pele macia e cheirosa",
        "Sua vozinha linda que me deixa aconchegado demais (mesmo que você não goste dela)",
        "Te ouvir falando de coisas que você gosta e ver seu olhinho brilhando",
        "Seu narizinho que me faz ter vontade de apertar ele sempre",
        "Suas bochechas que me fazem querer morder muuuito elas",
        "Te ver comendo toda animadinha e feliz (principalmente com doce)",
        "As suas orelhinhas pequenininhas que me dão vontade de morder",
        "Seu cabelinho macio e cheiroso que me faz querer ficar cheirando ele e passando a mão",
        "Te ver dormindo e sentir que você é a coisa mais linda do mundo",
        "Ver você toda carentezinha querendo muito carinho e amor",
        "Te ver toda feliz quando eu faço algo que você gosta",
        "O jeitinho que você fala 'besta' quando fica sem graça com uma gracinha minha",
        "Quando você fecha os olhinhos e sorri depois de ganhar um beijo",
    ];
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
                className="text-3xl font-bold text-center text-pink-500 mb-8"
                data-aos="zoom-in"
            >
                20 Razões Pelas Quais Eu Te Amo
            </h2>
            <ul className="space-y-6" ref={listRef}>
                {reasons.slice(0, 20).map((r, i) => (
                    <div data-aos="fade-right" key={i}>
                        <li className="bg-pink-50 border-2 border-pink-200 py-7 px-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-200">
                            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-3 sm:gap-3">
                                <span className="text-2xl sm:text-2xl text-pink-500">
                                    ❤️
                                </span>
                                <span className="text-lg sm:text-xl text-gray-700 leading-snug">
                                    {r}
                                </span>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    );
}

export default LoveReasons;
