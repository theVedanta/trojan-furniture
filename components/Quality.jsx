import Image from "next/image";
import Link from "next/link";
import Title from "./Title";

const Quality = () => {
    return (
        <section className="flex w-screen tab:flex-col-reverse tab:h-screen">
            <div className="quality-img w-1/2 h-screen relative tab:w-full">
                <Image
                    alt="img"
                    src="/img.png"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="hero-info cont w-1/2 flex flex-col justify-center blap:pr-10 tab:h-auto tab:my-16 tab:px-36 tab:w-full tab:items-center tab:text-center ph:px-0">
                <Title>
                   Bespoke furniture crafted for your needs.
                </Title>
                <p className="text-lg pr-32 py-10 blap:pr-0 blap:text-base blap:leading-relaxed ph:px-10">
                    Take a look at some of our examples and get in touch with us to discuss your exact needs and we will find a way to meet them.
                </p>
                <Link href="/contact-us">
                    <a className="btn btn-primary">Contact Us</a>
                </Link>
            </div>
        </section>
    );
};

export default Quality;
