import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export const Carousel = ({ slides, autoSlide = false, autoSlideInterval = 3000, }) => {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    }

    const nextSlide = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="relative w-full overflow-hidden ">
            <div
                className={`flex w-full transition-transform ease-out duration-500 `}
                style={{
                    transform: `translateX(-${current * 100}%)`
                    // Menggeser gambar sesuai index current
                }}
            >
                {slides.map((s, index) => {
                    return (
                        <img
                            key={index}
                            className=" min-w-full object-contain mt-14 md:mt-0"  // Mengisi lebar layar penuh menggunakan min-w
                            src={s}
                            alt={`slide-${index}`}
                        />
                    );
                })}
            </div>

            {/* Tombol navigasi kiri */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 opacity-[80%]">
                <FaChevronLeft className="text-2xl text-white" />
            </button>

            {/* Tombol navigasi kanan */}
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 opacity-[80%]">
                <FaChevronRight className="text-2xl text-white" />
            </button>

            <div
                className="absolute bottom-10 right-0 left-0 py-4 flex justify-center gap-4 w-full ">
                {slides.map((s, index) => {
                    return <div
                        onClick={() => {
                            setCurrent(index)
                        }}
                        key={"circle" + index}
                        className={`rounded-full w-2 h-2 cursor-pointer ${index === current ? "bg-black" : "bg-gray-400"}`}></div>;
                })}
            </div>
        </div>
    );
};

export default Carousel;


