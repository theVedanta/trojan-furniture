import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../components/ProductCard";
import cards from "../data";
import { Navigation, Autoplay } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Carousel = () => {
    return (
        <div className="flex items-center">
            <div className="cursor-pointer p-7 text-4xl" id="car-left">
                <FiArrowLeft />
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay
                loop
                navigation={{
                    nextEl: "#car-right",
                    prevEl: "#car-left",
                }}
                className="cursor-grab"
            >
                {cards.map((card, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex justify-center items-center"
                    >
                        <ProductCard card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="cursor-pointer p-7 text-4xl" id="car-right">
                <FiArrowRight />
            </div>
        </div>
    );
};

export default Carousel;
