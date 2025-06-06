import { ChevronDown } from "lucide-react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

function WelcomeText() {
    const [showChevron, setShowChevron] = useState(true);

    useEffect(() => {
        function handleScroll() {
            setShowChevron(window.scrollY < window.innerHeight * 0.4);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center text-center pb-10 px-4 md:py-16 md:px-0 min-h-[100svh] relative">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-lg">
                Luana & Nicolas
            </h1>
            <p className="italic text-xl sm:text-xl md:text-2xl text-pink-400 mb-2">
                Feliz Dia dos Namorados, minha princesa!
            </p>
            <p className="text-lg sm:text-lg md:text-xl text-pink-400">
                Bem-vinda ao nosso cantinho especial
            </p>
            <button
                className="bg-pink-500 hover:bg-pink-600 transition transform-gpu hover:scale-110 text-white font-bold py-2 px-6 sm:px-8 rounded-3xl mt-5 will-change-transform cursor-pointer text-lg sm:text-xl"
                onClick={() => {
                    const section = document.activeElement.closest("section");
                    const navbar = document.getElementById("navbar");
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    if (section) {
                        const y =
                            section.getBoundingClientRect().bottom +
                            window.scrollY -
                            navbarHeight;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }}
            >
                Explorar nosso amor
                <Heart className="w-5 h-5 inline-block ml-2 fill-white" />
            </button>
            <ChevronDown
                className={`w-8 h-8 sm:w-10 sm:h-10 text-pink-400 animate-bounce absolute bottom-6 sm:bottom-10 transition-opacity duration-500 ${
                    showChevron
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            />
        </section>
    );
}

export default WelcomeText;
