import Image from "next/image";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const Product = () => {
    return (
        <>
            <div className="product cont flex h-screen bg-gray">
                <div className="product-img w-1/2 h-full flex items-center">
                    <Image
                        src="/sofa.png"
                        alt="sofa"
                        width="550"
                        height="550"
                    />
                </div>

                <div className="product-info w-1/2 flex flex-col justify-center">
                    <h4 className="product-title text-5xl font-serif">
                        Comfy Office Sofa
                    </h4>
                    <span className="text-2xl my-6">$420</span>
                    <p className="w-11/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nullao.{" "}
                    </p>

                    <table className="w-2/3 mt-10">
                        <tr>
                            <th>Colour</th>
                            <td>Brown</td>
                        </tr>
                        <tr>
                            <th>Colour</th>
                            <td>Brown</td>
                        </tr>
                        <tr>
                            <th>Colour</th>
                            <td>Brown</td>
                        </tr>
                        <tr>
                            <th>Colour</th>
                            <td>Brown</td>
                        </tr>
                    </table>

                    <button className="btn btn-primary mt-10 !max-w-xl">
                        Contact us
                    </button>
                </div>
            </div>

            <div className="recommends bg-white py-20">
                <Carousel />
            </div>
        </>
    );
};

export default Product;
