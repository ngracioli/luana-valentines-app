import { Clock } from "lucide-react";

function TimeCounter() {
    return (
        <section
            className="text-center py-10 px-2 sm:px-6 bg-white rounded-2xl max-w-2xl w-full mx-auto border-5 border-pink-100"
        >
            <h2 className="text-3xl font-bold text-pink-500 mb-8 flex flex-col items-center justify-center gap-2">
                <Clock
                    className="w-8 h-8 text-pink-500 animate-bounce"
                />
                <span>Estamos juntos há</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Anos
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Meses
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Semanas
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Dias
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Horas
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Minutos
                    </span>
                </div>
                <div className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100">
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-xs sm:text-sm mt-1 tracking-wide">
                        Segundos
                    </span>
                </div>
            </div>
        </section>
    );
}

export default TimeCounter;
