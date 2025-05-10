import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import LoveMessageBox from "./components/LoveMessageBox";
import LoveReasons from "./components/LoveReasons";
import TimeCounter from "./components/TimeCounter";
import TimeLine from "./components/TimeLine";
import WelcomeText from "./components/WelcomeText";

import "./index.css";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const sectionClass =
        "rounded-3xl bg-white shadow-xl p-6 md:p-10 border border-pink-100";

    return (
        <div className="min-h-screen heart-bg font-sans flex flex-col bg-pink-50">
            <div data-aos="zoom-down">
                <WelcomeText />
            </div>

            <main className="flex-1 flex flex-col gap-10 md:gap-16 max-w-5xl w-full mx-auto px-2 sm:px-6 md:px-10 py-6">
                <section className={sectionClass}>
                    <TimeCounter />
                </section>
                <section className={sectionClass}>
                    <TimeLine />
                </section>
                <section className={sectionClass}>
                    <Gallery />
                </section>
                <section className={sectionClass}>
                    <LoveReasons />
                </section>
                <section className={sectionClass}>
                    <LoveMessageBox />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
