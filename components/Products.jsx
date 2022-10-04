import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import cards from "../data";
import { Navigation, Autoplay } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Products = () => {
    return (
        <section className="cont py-20 bg-black text-white">
            <h4 className="text-2xl font-medium mb-16">Example Furniture</h4>

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
                            className="flex justify-center items-center"
                            key={i}
                        >
                            <Card card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="cursor-pointer p-7 text-4xl" id="car-right">
                    <FiArrowRight />
                </div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div className="card">
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
        </div>
    );
};

export default Products;
