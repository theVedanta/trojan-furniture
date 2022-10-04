import Link from "next/link";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    const links = {
        Home: "/",
        About: "/",
        Contact: "/",
        "Privacy Policy": "/",
    };

    return (
        <footer className="footer bg-black cont py-20 flex">
            <div className="w-1/2">
                <h1 className="text-gold text-4xl font-serif">
                    Trojan Furniture
                </h1>
                <Link href="mailto:contact@craftworx.co.in">
                    <a className="flex items-center text-neutral-400 my-6">
                        <FiMail />
                        &nbsp;&nbsp;contact@craftworx.co.in
                    </a>
                </Link>
                <div className="links flex flex-col flex-wrap w-full h-32 py-4 mt-10">
                    {Object.keys(links).map((link, i) => (
                        <Link key={i} href={links[link]}>
                            <a className="text-gray mb-4 hover:underline">
                                {link}
                            </a>
                        </Link>
                    ))}
                </div>

                <span className="text-gray">
                    Trojan Furniture ©2022 All Right Reserved
                </span>
            </div>

            <div className="newsletter w-1/2">
                <h4 className="text-gray text-3xl font-">
                    Subscribe to our Newsletter
                </h4>
                <div className="input rounded-lg bg-white px-5 py-4 flex items-center w-2/3 my-10">
                    <FiMail className="text-2xl" />
                    <input
                        className="px-4 "
                        type="text"
                        placeholder="Enter your Email Address"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </div>
        </footer>
    );
};

export default Footer;
