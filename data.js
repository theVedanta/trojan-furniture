import Sofa from "./components/Sofas/Sofa1";
import Sofa2 from "./components/Sofas/Sofa2";
import Sofa3 from "./components/Sofas/Sofa3";
import Sofa4 from "./components/Sofas/Sofa4";

const cards = [
    {
        id: 1,
        name: "Trosseau Packaging",
        price: 420,
        img: "/sofa-pics/1.png",
        model: <Sofa animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 2,
        name: "Nakli sofa",
        price: 420,
        img: "/sofa-pics/2.png",
        model: <Sofa2 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 3,
        name: "Trosseau Packaging",
        price: 420,
        img: "/sofa-pics/3.png",
        model: <Sofa3 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 4,
        name: "Trosseau Packaging",
        price: 420,
        img: "/sofa-pics/4.png",
        model: <Sofa4 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
];

export default cards;
