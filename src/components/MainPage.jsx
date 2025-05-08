import { Heart } from "lucide-react";

function MainPage() {
    return (
        <section className="flex flex-col items-center justify-center text-center p-10 min-h-[90vh] bg-gradient-to-b from-pink-100 via-pink-200 to-purple-100 text-pink-400 ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Luana & Nicolas
            </h1>
            <p className="italic text-xl md:text-2xl mb-6 max-w-xl">
                Feliz Dia dos Namorados, minha princesa! <br />
                Bem-vinda ao nosso cantinho especial
            </p>
            <Heart className="w-16 h-16 animate-pulse " />
        </section>
    );
}

export default MainPage;
