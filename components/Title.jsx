const Title = ({ children, className }) => {
    return (
        <h1
            className={`font-serif text-6xl leading-snug blap:text-4xl blap:leading-normal lap:text-3xl ${className}`}
        >
            {children}
        </h1>
    );
};

export default Title;
