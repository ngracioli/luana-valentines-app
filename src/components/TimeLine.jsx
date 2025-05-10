const events = [
    {
        date: "06 de Dezembro de 2024",
        title: "Nos conhecemos pelo Instagram 📱",
        description:
            "Nossa conversa começou timidamente e, sem perceber, já estávamos apegados um ao outro.",
    },
    {
        date: "21 de Dezembro de 2024",
        title: "Nosso Primeiro Encontro ✨",
        description:
            "Saímos pela primeira vez e, então, vi o quão linda e doce você era. Percebi o quanto a gente se encaixava em tudo que fazia. Foi nesse dia que comecei a me apaixonar por você.",
    },
    {
        date: "21 de Dezembro de 2024",
        title: "Primeiro Beijo 💑",
        description:
            "Após horas de conversa e conexão, nosso primeiro beijo aconteceu. Me passou a sensação de que o que estávamos vivendo tinha tudo para se tornar algo especial.",
    },
    {
        date: "01 de Janeiro de 2025",
        title: "Primeiro 'Eu te amo' 💌",
        description:
            "Logo no início do ano, com o coração transbordando, as palavras mais verdadeiras saíram da minha boca: eu disse que te amava.",
    },
    {
        date: "01 de Março de 2025",
        title: "Pedido de Namoro 💍",
        description:
            "Com o coração cheio de certeza e carinho, perguntei se você queria ser minha de verdade. E foi aí que você disse sim!",
    },
    {
        date: "Hoje",
        title: "Vivendo esse Amor 💖",
        description:
            "A cada dia que passa, tenho mais certeza de que estar com você, Luana, é o melhor lugar que eu poderia estar. Eu te amo muito, minha princesinha, e espero continuar vivendo esse amor por muitos e muitos anos.",
    },
];

const Timeline = () => {
    return (
        <section className="py-8 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-white rounded-3xlborder border-pink-100 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 sm:mb-10 text-center flex items-center gap-2">
                Nossa História
            </h2>
            <div className="relative w-full">
                <div className="border-l-2 sm:border-l-4 border-pink-300 absolute h-full left-4 sm:left-6 top-0 z-0"></div>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="mb-8 sm:mb-12 ml-8 sm:ml-12 relative flex flex-col sm:flex-row items-start z-10"
                        data-aos="zoom-in-right"
                    >
                        <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full left-[-10px] sm:left-[-15px] top-2 border-4 border-white shadow-md"></div>
                        <div className="bg-pink-50 shadow-lg rounded-2xl p-4 sm:p-6 flex-1 border border-pink-100 w-full">
                            <time className="text-xs sm:text-sm text-pink-600 font-semibold tracking-wide">
                                {event.date}
                            </time>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-pink-500 mt-1">
                                {event.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
