import Link from "next/link";
import ModelBox from "./ModelBox";

const Hero = () => {
    return (
        <section className="hero cont flex h-screen">
            <div className="hero-info w-1/2 h-full flex flex-col justify-center">
                <h1 className="font-serif text-6xl leading-snug">
                    High quality furtniture made for your <u>office space.</u>
                </h1>
                <p className="text-lg pr-32 py-10">
                    Love the giver more than the gift, we’ll take care of the
                    rest. Providing you with the best quality of services with
                    premium packaging that will leave everyone awestruck.
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Explore</a>
                </Link>
            </div>

            <ModelBox />
        </section>
    );
};

export default Hero;
