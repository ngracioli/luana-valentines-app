import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const START_DATE = new Date(2025, 2, 1, 0, 0, 0);

function getDurationSince(startDate, now) {
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    const weeks = Math.floor(days / 7);
    days = days % 7;

    return { years, months, weeks, days, hours, minutes, seconds };
}

function TimeCounter() {
    const [duration, setDuration] = useState(
        getDurationSince(START_DATE, new Date())
    );
    const [serverNow, setServerNow] = useState(null);

    useEffect(() => {
        async function fetchTime() {
            try {
                const res = await fetch(
                    "https://worldtimeapi.org/api/timezone/America/Sao_Paulo"
                );
                const data = await res.json();
                setServerNow(new Date(data.datetime));
            } catch {
                setServerNow(new Date());
            }
        }
        fetchTime();
    }, []);

    useEffect(() => {
        if (!serverNow) return;
        let offset = Date.now() - serverNow.getTime();
        const interval = setInterval(() => {
            const now = new Date(Date.now() - offset);
            setDuration(getDurationSince(START_DATE, now));
        }, 1000);
        return () => clearInterval(interval);
    }, [serverNow]);

    const labels = [
        { label: "Anos", value: duration.years },
        { label: "Meses", value: duration.months },
        { label: "Semanas", value: duration.weeks },
        { label: "Dias", value: duration.days },
        { label: "Horas", value: duration.hours },
        { label: "Minutos", value: duration.minutes },
        { label: "Segundos", value: duration.seconds },
    ];

    return (
        <section className="text-center py-10 px-2 sm:px-6 bg-white rounded-2xl max-w-2xl w-full mx-auto border-5 border-pink-100">
            <h2 className="text-3xl font-bold text-pink-500 mb-8 flex flex-col items-center justify-center gap-2">
                <Clock className="w-8 h-8 text-pink-500 animate-bounce" />
                <span>Estamos juntos há</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                {labels.map((item) => (
                    <div
                        key={item.label}
                        className="bg-pink-50 rounded-xl shadow p-4 w-24 text-pink-500 flex flex-col items-center border border-pink-100"
                        aria-label={`${item.value} ${item.label}`}
                    >
                        <span className="text-2xl font-bold">{item.value}</span>
                        <span className="text-xs sm:text-sm mt-1 tracking-wide">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TimeCounter;
