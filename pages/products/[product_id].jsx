import ModelBox from "../../components/ModelBox";
import Carousel from "../../components/Carousel";
import { useRouter } from "next/router";
import cards from "../../data";
import { useEffect, useState } from "react";
import Title from "../../components/Title";

const Product = () => {
    const router = useRouter();
    const [prod, setProd] = useState({});

    useEffect(() => {
        const id = parseInt(router.query.product_id);
        console.log(cards.filter((card) => card.id === id));
        setProd(cards.filter((card) => card.id === id)[0]);
    }, [router]);

    return (
        <>
            <div className="product cont flex h-screen bg-gray">
                <ModelBox model={prod && prod.model} animate={false} />

                <div className="product-info w-1/2 flex flex-col justify-center pl-10">
                    <Title>{prod && prod.name}</Title>

                    <span className="text-2xl my-6">${prod && prod.price}</span>
                    <p className="w-11/12">{prod && prod.desc}</p>

                    <table className="w-2/3 mt-10">
                        <tr>
                            <th>Colour</th>
                            <td>{prod && prod.color}</td>
                        </tr>
                        <tr>
                            <th>Material</th>
                            <td>{prod && prod.mat}</td>
                        </tr>
                        <tr>
                            <th>Dimensions</th>
                            <td>{prod && prod.dim}</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{prod && prod.weight}</td>
                        </tr>
                    </table>

                    <button className="btn btn-primary mt-10 !max-w-xl">
                        Contact us
                    </button>
                </div>
            </div>

            <div className="recommends cont bg-white py-20">
                <Carousel />
            </div>
        </>
    );
};

export default Product;
