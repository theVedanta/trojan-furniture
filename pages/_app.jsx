import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default App;
