import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function VirtualHug() {
    const [showHug, setShowHug] = useState(false);
    const [grow, setGrow] = useState(false);
    const emojiRef = useRef();

    useEffect(() => {
        if (showHug) {
            setGrow(false);
            const timeout = setTimeout(() => setGrow(true), 1000);
            return () => clearTimeout(timeout);
        }
    }, [showHug]);

    useEffect(() => {
        if (grow && emojiRef.current) {
            emojiRef.current.animate(
                [{ transform: "scale(1)" }, { transform: "scale(1.3)" }],
                {
                    duration: 3000,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            );
        }
    }, [grow]);

    const handleClick = () => {
        setShowHug(true);
        setTimeout(() => {
            setShowHug(false);
        }, 4000);
    };

    return (
        <section className="text-center py-10 px-2 sm:px-6 rounded-2xl shadow-xl max-w-2xl w-full mx-auto border-4 border-pink-100">
            <h2 className="text-3xl font-bold text-pink-500 mb-8 flex items-center justify-center gap-2 flex-wrap">
                Abraço Virtual <span className="inline-block">🤗</span>
            </h2>

            <button
                onClick={handleClick}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 mb-2"
            >
                Aperte para receber um abraço virtual meu 🤍
            </button>
            <AnimatePresence>
                {showHug && (
                    <motion.div
                        className="fixed inset-0 bg-pink-100/90 backdrop-blur-md flex flex-col items-center justify-center z-[9999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ scale: 0, y: 100 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0, y: 100 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                            }}
                        >
                            <motion.div
                                className="text-[90px] mx-2 drop-shadow-[0_0_30px_rgba(255,182,193,0.8)]"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{
                                    scale: [0, 1.2, 1],
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 1, times: [0, 0.4, 1] }}
                            >
                                <span ref={emojiRef} className="inline-block">
                                    🤗
                                </span>
                            </motion.div>
                        </motion.div>
                        <motion.p
                            className="mt-8 text-2xl font-bold text-pink-100 bg-pink-400/70 px-8 py-4 rounded-2xl shadow-lg border-2 border-pink-200"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Abracinho! 💖
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default VirtualHug;
