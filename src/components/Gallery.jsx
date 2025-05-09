function Gallery() {
    const photos = [
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
        "/src/assets/photo1.jpg",
    ];

    return (
        <section className="py-10 px-2 sm:px-6">
            <h2
                className="text-3xl font-bold text-center text-pink-500 mb-8 flex items-center justify-center gap-2"
                data-aos="zoom-in"
            >
                Nossas Memórias
            </h2>
            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                data-aos="zoom-in"
            >
                {photos.map((src, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow bg-white border border-pink-100 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <img
                            src={src}
                            alt={`Foto ${index + 1}`}
                            className="w-full aspect-[4/5] object-cover hover:brightness-105 transition duration-200"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;
