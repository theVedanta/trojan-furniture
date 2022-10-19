import ProductCard from "../../components/ProductCard";
import cards from "../../data";

const Index = () => {
    return (
        <main className="cont mt-32">
            <h4 className="mb-4 ml-8 text-3xl font-bold text-slate-800">
                Products
            </h4>

            <div className="prods flex flex-wrap items-center mb-32">
                {cards.map((card) => (
                    <ProductCard
                        key={card.id}
                        card={card}
                        className="mx-10 my-8"
                    />
                ))}
            </div>
        </main>
    );
};

export default Index;
