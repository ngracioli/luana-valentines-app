import { useState } from "react";

const events = [
    {
        date: "06 de Dezembro de 2024",
        title: "Nos conhecemos pelo Instagram 📱",
        description:
            "Nossa conversa começou de um jeito bem tímido mas, sem perceber, já tinha me apegado muito a você amorzinho.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "21 de Dezembro de 2024",
        title: "Nosso Primeiro Encontro ✨",
        description:
            "Saímos pela primeira vez e, então, vi o quão linda e fofinha você era. Percebi o quanto a gente se encaixava em tudo que fazia e foi nesse dia que comecei a me apaixonar mais ainda por você.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "21 de Dezembro de 2024",
        title: "Primeiro Beijo 💑",
        description:
            "Após horas de conversa e conexão, nosso primeiro beijo aconteceu. Me passou a sensação de que o que a gente tava vivendo tinha tudo para se tornar algo especial, minha princesinha.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "01 de Janeiro de 2025",
        title: "Primeiro 'Eu te amo' 💌",
        description:
            "Logo no início do ano, com o meu coração transbordando de amor, tive a coragem o suficiente pra te falar o quanto eu te amava, fofinha linda.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "01 de Fevereiro de 2025",
        title: "Nosso 'Primeiro Filho' 🍼",
        description:
            "Faltando dois dias pro meu aniversário, num dos nossos passeios no shopping, eu peguei nosso filhinho (Gengar) na máquina de pelúcia pra você. Fiquei muito feliz pois senti que algo que eu gostava começou a ser parte de você também, amor.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "03 de Fevereiro de 2025",
        title: "Meu Aniversário 🎉🎂",
        description:
            "Meu dia especial ficou ainda mais especial sabendo que já tinha você ao meu lado. Você foi pra mim um presente que eu nunca vou esquecer.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "23 de Fevereiro de 2025",
        title: "Seu Aniversário 🎈👑",
        description:
            "O seu dia, minha princesa! Fiquei muito feliz em te dar parabéns e poder mimar você. Ver seu sorriso perto desse dia foi a melhor sensação pra mim, sério amorzinho.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "01 de Março de 2025",
        title: "Pedido de Namoro 💍",
        description:
            "Com o coração cheio de certeza e carinho, perguntei se você queria ser minha de verdade mesmo. E foi aí que você disse sim e a gente começou a namorar!",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "09 de Março de 2025",
        title: "Primeira Vez Jogando Minecraft 🧱🐱",
        description:
            "Jogamos Minecraft juntos pela primeira vez e construímos nossa casinha com nossos gatinhos amorzinho. Foi tão divertido e especial compartilhar esse momento com você, ainda me lembro da sensação.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "15 de Março de 2025",
        title: "Primeira Call e Roblox 🎧",
        description:
            "Fizemos nossa primeira call, mesmo você com muita vergonha da sua voz linda perfeita maravilhosa. Foi muito bom te ouvir pela primeira vez online, e ainda nos divertimos jogando Roblox juntinhos.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "05 de Abril de 2025",
        title: "Primeira Vez em um Barzinho Juntos 🍻🍔",
        description:
            "Foi nossa primeira vez indo no Santo Giro, a gente comeu espetinho e eu comi um hambúrguer. Foi muito legal sair pra um lugar diferente do shopping e tirar várias fotinhas lindas suas.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "13 de Abril de 2025",
        title: "Primeira Vez na Minha Casa 💕🍿",
        description:
            "Foi a primeira vez que você veio na minha casa e a gente ficou bem agarradinho assistindo coisinhas e comendo várias besteirinhas foi tudo muuuuuuuuuuito bom.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "20 de Maio de 2025",
        title: "Dormiu em Casa Pela Primeira Vez 🌙💤",
        description:
            "Foi a primeira vez que você dormiu aqui em casa e foi perfeitooooooo. Dormir agarradinho com você é sempre muito bom, eu amo muuuuuuito isso me sinto tão seguro e confortável.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "20 de Abril de 2025",
        title: "Nossa Primeira Páscoa Juntos 🐰🍫",
        description:
            "Nossa primeira Páscoa juntos (mesmo que eu tenha te dado o ovo da Hello Kitty dois dias antes askdjasjldad). Foi tudo muito especial ao seu lado!",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "25 de Maio de 2025",
        title: "Primeiro Evento Geek Juntos 🎥🎮",
        description:
            "Foi a nossa primeira vez em um evento de anime / coisinhas geek, mesmo não tendo muita coisa, foi muito legal estar com você, poder compartilhar esse momentozinho contigo e aproveitar o nosso tempo juntos.",
        picture: "./src/assets/photo1.jpg",
    },
    {
        date: "Hoje",
        title: "Vivendo esse Amor 💖",
        description:
            "A cada dia que passa, tenho mais certeza de que estar com você, Luana, é o melhor lugar que eu poderia estar. Eu te amo muito, minha princesinha, e espero continuar vivendo esse amor por muitos e muitos anos.",
        picture: "./src/assets/photo1.jpg",
    },
];

const Timeline = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section className="py-8 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-white rounded-3xl border border-pink-100 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 sm:mb-10 text-center flex items-center gap-2">
                Nossa História
            </h2>
            <div className="relative w-full">
                <div className="border-l-2 sm:border-l-4 border-pink-300 absolute h-full left-4 sm:left-6 top-0 z-0"></div>
                {events.map((event, index) => (
                    <div key={index} data-aos="zoom-in-right">
                        <div
                            className="mb-8 sm:mb-12 ml-8 sm:ml-12 relative flex flex-col sm:flex-row items-start z-10 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                            onClick={() => setSelectedImage(event.picture)}
                            tabIndex={0}
                            role="button"
                        >
                            <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full left-[-10px] sm:left-[-15px] top-2 border-4 border-white shadow-md"></div>
                            <div className="bg-pink-50 shadow-lg rounded-2xl p-4 sm:p-6 flex-1 border border-pink-100 w-full">
                                <time className="text-xs sm:text-base text-pink-600 font-semibold tracking-wide">
                                    {event.date}
                                </time>
                                <h3 className="text-lg sm:text-lg md:text-xl font-bold text-pink-500 mt-1">
                                    {event.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-base sm:text-base md:text-base">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-pink-200/80 flex items-center justify-center z-50 cursor-pointer animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    data-aos="fade-in"
                    data-aos-duration="500"
                >
                    <img
                        src={selectedImage}
                        className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white"
                    />
                </div>
            )}
        </section>
    );
};

export default Timeline;
