import Link from "next/link";
import ModelBox from "./ModelBox";
import Sofa from "./Sofas/Sofa1";
import Title from "./Title";

const Hero = () => {
    return (
        <section className="hero cont flex h-screen tab:flex-col tab:h-screen tab:justify-center">
            <div className="hero-info w-1/2 h-full flex flex-col justify-center blap:pr-10 tab:h-auto tab:mt-32 tab:w-full tab:items-center tab:text-center tab:px-14 ph:px-0">
                <Title>
                    High quality furtniture made for your <u>office space.</u>
                </Title>
                <p className="text-lg pr-32 py-10 blap:pr-10 blap:text-base blap:leading-relaxed tab:pr-0">
                    Love the giver more than the gift, we’ll take care of the
                    rest. Providing you with the best quality of services with
                    premium packaging that will leave everyone awestruck.
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Explore</a>
                </Link>
            </div>

            <ModelBox model={<Sofa />} />
        </section>
    );
};

export default Hero;
