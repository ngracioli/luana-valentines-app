import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LetterLogo from "./LetterLogo";

function LetterBox() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <section
                className="text-center py-10 px-2 sm:px-6 rounded-2xl shadow-xl max-w-2xl w-full mx-auto border-4 border-pink-100"
                data-aos="zoom-in"
            >
                <h2 className="text-3xl font-bold text-pink-500 mb-14 flex items-center justify-center gap-2 flex-wrap">
                    Minha cartinha para minha princesa{" "}
                    <span className="inline-block">💌</span>
                </h2>
                <LetterLogo
                    className="mx-auto mb-4 w-32 h-32 animate-bounce"
                    stroke="#ec4899"
                />
                <button
                    className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-18 py-3 rounded-full font-semibold text-lg shadow transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    onClick={() => setShowModal(true)}
                >
                    Abrir a carta
                </button>
            </section>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-pink-100/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative text-center border-2 border-pink-200 mx-2"
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 14,
                            }}
                        >
                            <button
                                className="cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-pink-500 text-3xl font-bold focus:outline-none"
                                onClick={() => setShowModal(false)}
                                aria-label="Fechar"
                            >
                                ×
                            </button>
                            <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">
                                Redirecionar para a carta
                            </h3>
                            <p className="mb-6 text-gray-700 text-base ">
                                Você será redirecionada para a cartinha.
                                <br />
                                Deseja continuar?
                            </p>
                            <button
                                className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-18 py-3 rounded-full font-semibold text-lg shadow transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                onClick={() => navigate("/letter")}
                            >
                                Ir para a carta
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default LetterBox;
