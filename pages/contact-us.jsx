const Contact = () => {
    return (
        <>
            <main className="cont contact flex justify-center items-center w-screen h-screen">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const inps = document.querySelectorAll("form .input");
                        console.log(inps);
                        inps.forEach((inp) => (inp.value = ""));
                    }}
                    className="contact-box bg-white p-16 rounded-xl flex flex-col items-center w-2/3 h-2/3 shadow lap:w-full ph:p-10 mph:px-8"
                >
                    <h4 className="text-4xl font-semibold text-slate-700 ph:text-2xl ph:text-center">
                        Get in touch with us
                    </h4>

                    <div className="inputs ph:flex-col">
                        <input
                            type="text"
                            className="input ph:mb-3"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="inputs h-full !mt-4">
                        <textarea
                            type="text"
                            className="input"
                            placeholder="Your message here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-10">
                        Send message
                    </button>
                </form>
            </main>
        </>
    );
};

export default Contact;
