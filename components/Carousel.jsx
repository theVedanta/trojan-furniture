import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import cards from "../data";
import { Navigation, Autoplay } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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
                        <Card card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="cursor-pointer p-7 text-4xl" id="car-right">
                <FiArrowRight />
            </div>
        </div>
    );
};

const Card = ({ card }) => {
    return (
        <Link href="/products/1">
            <a className="card hover:underline">
                <Image
                    src={card.img}
                    width="300"
                    height="300"
                    alt="product"
                    objectFit="cover"
                    className="rounded-xl"
                />
                <h5 className="font-medium text-xl mt-4">{card.name}</h5>
                <span>${card.price}</span>
            </a>
        </Link>
    );
};

export default Carousel;
