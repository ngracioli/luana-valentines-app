import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Letter() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-50 py-10 px-2 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                className="bg-white/90 border-4 border-pink-200 rounded-3xl shadow-2xl max-w-2xl w-full mx-auto p-4 sm:p-8 flex flex-col items-center relative"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 border-2 border-pink-200 rounded-2xl shadow-lg px-4 sm:px-10 py-8 sm:py-12 text-pink-600 font-serif text-lg sm:text-xl leading-relaxed text-center mb-8 before:content-[''] before:absolute before:-top-6 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-16 before:bg-[url('https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f48c.png')] before:bg-contain before:bg-no-repeat before:opacity-80 animate-fadeInLetter"
                >
                    <span className="block text-2xl sm:text-3xl font-bold text-pink-400 mb-4 mt-4 sm:mt-2 font-cursive animate-fadeInLetter">
                        Para o amor da minha vida, Luana
                    </span>
                    <span className="block mb-6 text-pink-500 font-medium animate-fadeInLetter">
                        Minha princesa,
                        <br />
                        <br />
                        Você não faz ideia de como eu sou grato por cada segundo
                        que passo ao seu lado, porque estar com você é algo que
                        simplesmente não dá pra explicar, parece coisa de outro
                        mundo, uma sensação incrível, tão surreal, que nenhuma
                        palavra seria capaz de descrever tudo que eu sinto por
                        você, Luana.
                        <br />
                        <br />
                        Desde o primeiro dia em que começamos a sentir
                        sentimentos um pelo outro, tudo que você diz, cada
                        sorriso, cada gesto, toca meu coração de uma forma muito
                        intensa, impossível de explicar, é como se meu coração
                        disparasse, pulasse dentro de mim, até mesmo quando
                        estamos brincando, com você me chamando de doido, de
                        bobinho e coisas assim (eu não consigo parar de sorrir
                        só de lembrar disso jkasfkjafaskf 💗).
                        <br />
                        <br />
                        E, por mais que o tempo que a gente está junto ainda não
                        seja tão longo, tudo isso parece muito maior, meu
                        amorzinho, como se eu tivesse nascido pra viver
                        exatamente esse momento, como se meu destino fosse te
                        encontrar, te amar e viver essa história com você, e eu
                        sou infinitamente grato por ter tido a sorte de cruzar o
                        teu caminho, de te ter na minha vida, de poder te amar.
                        <br />
                        <br />
                        Você chegou e, por mais que pareça clichê, você
                        realmente trouxe cor no meu mundo, trouxe leveza,
                        preencheu todos os espaços vazios dentro de mim de um
                        jeito tão bonito que hoje eu não consigo mais me
                        imaginar sem você, sem a tua voz, sem teu sorriso, sem
                        teu amor, e mesmo nos dias longe um do outro, meu
                        coração continua inteiramente seu, contando as horas pra
                        te ver, te abraçar forte, te beijar devagar, sentir teu
                        cheiro, tua pele, teu carinho, e viver contigo momentos
                        que são, sem dúvida, os melhores da minha vida.
                        <br />
                        <br />
                        E é incrível perceber como, a cada dia que passa, cresce
                        ainda mais essa vontade de te mostrar o quanto eu te
                        amo, o quanto você é importante, o quanto faz parte de
                        mim, e mais do que isso, cresce o desejo de construir ao
                        teu lado uma história linda, verdadeira, cheia de
                        carinho, sorrisos, abraços apertados, conversas bobas,
                        planos, sonhos e tudo que possa fazer parte dessa vida
                        que eu tanto quero viver contigo.
                        <br />
                        <br />
                        Você é simplesmente perfeita, linda por dentro e por
                        fora, tem um coração puro, um olhar que me desmonta, um
                        jeito de cuidar que me transforma e me faz querer ser um
                        homem melhor todos os dias, porque é impossível estar
                        perto de você e não se sentir tocado por esse sentimento
                        e carinho que você transmite pra mim.
                        <br />
                        <br />
                        E, às vezes, eu fico te olhando, perdido na sua
                        aparência, no seu jeito, no teu jeitinho de falar, no
                        jeito que você sorri, na tua risada que, pra mim, é
                        simplesmente a coisa mais perfeita que existe, e eu me
                        perco totalmente em você, no teu cheiro, na tua voz, no
                        brilho dos teus olhos, em cada pedacinho teu, como se o
                        tempo simplesmente parasse e o mundo inteiro
                        desaparecesse, deixando só você ali, na minha frente,
                        perfeita, maravilhosa, totalmente minha.
                        <br />
                        <br />
                        Com você eu me sinto vivo, me sinto completo, me sinto
                        seguro, amado, feliz de um jeito que eu nunca imaginei
                        ser possível, porque você me faz enxergar o mundo com
                        outros olhos, me faz acreditar que o amor de verdade
                        existe, que é possível ser feliz de verdade só por saber
                        que eu te tenho, que você é minha, que somos nós,
                        juntos.
                        <br />
                        <br />
                        E é por isso que eu te digo, com toda certeza do mundo,
                        que não quero te perder nunca, que quero viver com você
                        cada parte da minha vida, te fazer sorrir todos os dias,
                        te amar com toda força que existe em mim e te mostrar,
                        todos os dias, que você é a melhor namorada do mundo.
                        <br />
                        <br />
                        Luana, você me faz ser o homem mais feliz do mundo, e
                        não importa quantas vezes eu repita, nunca vai ser o
                        suficiente pra expressar o quanto eu te amo, o quanto
                        você é essencial na minha vida, e o quanto eu sou feliz
                        por você existir e me permitir te amar assim, desse
                        jeito tão verdadeiro, tão forte, tão nosso.
                        <br />
                        <br />
                        Eu te amo infinitamente, minha princesinha. 💖✨
                    </span>
                    <span className="block mt-8 text-pink-600 font-extrabold text-lg sm:text-xl tracking-wide drop-shadow animate-fadeInLetter">
                        <span className="inline-flex items-center gap-2">
                            <span className="text-xl">💘</span>
                            Com todo o meu amor,
                            <span className="text-xl">✨</span>
                        </span>
                        <br />
                        <span className="text-pink-700 font-cursive text-lg sm:text-xl animate-heartbeat">
                            Nicolas
                        </span>
                    </span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="flex flex-wrap gap-3 justify-center mt-4"
                >
                    <span className="text-3xl">🌷</span>
                    <span className="text-3xl">🌸</span>
                    <span className="text-3xl">🌺</span>
                    <span className="text-3xl">🌻</span>
                    <span className="text-3xl">🌼</span>
                    <span className="text-3xl">💐</span>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-18 py-3 rounded-full font-semibold text-lg shadow transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    onClick={() => navigate("/")}
                >
                    Voltar para o início
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Letter;
