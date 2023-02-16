import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Trojan Furniture</title>
            </Head>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default App;
