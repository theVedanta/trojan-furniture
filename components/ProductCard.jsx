import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ card, className }) => {
    return (
        <Link href={`/products/${card.id}`}>
            <a className={`card hover:underline ${className}`}>
                <Image
                    src={card.img}
                    width="300"
                    height="300"
                    alt="product"
                    objectFit="contain"
                    className="rounded-xl"
                />
                <h5 className="font-medium text-xl mt-4">{card.name}</h5>
                <span>${card.price}</span>
            </a>
        </Link>
    );
};

export default ProductCard;
