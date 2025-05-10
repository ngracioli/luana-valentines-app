function WelcomeText() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-10 px-4 md:py-16 md:px-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-lg">
                Luana & Nicolas
            </h1>
            <p className="italic text-xl md:text-2xl text-pink-400 mb-2">
                Feliz Dia dos Namorados, minha princesa!
            </p>
            <p className="text-lg md:text-xl text-pink-400">
                Bem-vinda ao nosso cantinho especial
            </p>
        </section>
    );
}

export default WelcomeText;
