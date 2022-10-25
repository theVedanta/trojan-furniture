import Carousel from "./Carousel";

const Products = () => {
    return (
        <section className="cont py-20 bg-black text-white lap:pt-14">
            <h4 className="text-2xl font-medium mb-16 ph:text-xl ph:mb-10">
                Example Furniture
            </h4>

            <Carousel />
        </section>
    );
};

export default Products;
