import Image from "next/image";
import Link from "next/link";

const Quality = () => {
    return (
        <section className="flex w-screen h-screen">
            <div className="quality-img w-1/2 h-screen relative">
                <Image alt="img" src="/img.png" layout="fill" />
            </div>

            <div className="hero-info w-1/2 h-full flex flex-col justify-center cont">
                <h1 className="font-serif text-5xl leading-snug">
                    High quality furtniture made for <u>your space.</u>
                </h1>
                <p className="text-lg pr-32 py-10">
                    Love the giver more than the gift, we’ll take care of the
                    rest. Providing you with the best quality of services with
                    premium packaging that will leave everyone awestruck.
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Shop Now</a>
                </Link>
            </div>
        </section>
    );
};

export default Quality;
