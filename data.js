import Desk1 from "./components/Sofas/Desk1";
import Shelf1 from "./components/Sofas/Shefl1";
import Sofa from "./components/Sofas/Sofa1";
import Sofa2 from "./components/Sofas/Sofa2";
import Sofa3 from "./components/Sofas/Sofa3";
import Sofa4 from "./components/Sofas/Sofa4";
import Table1 from "./components/Sofas/Table1";
import Table2 from "./components/Sofas/Table2";

const cards = [
    {
        id: 1,
        name: "White Sofa",
        price: 350,
        img: "/sofa-pics/1.png",
        model: <Sofa animate={false} />,
        desc: <>Large white sofa, great for office spaces. </>,
        color: "White",
        dim: "42 x 42 x 42",
        mat: "Fabric",
        weight: "100KG",
    },
    {
        id: 2,
        name: "Premium Sofa",
        price: 500,
        img: "/sofa-pics/2.png",
        model: <Sofa2 animate={false} />,
        desc: <>High comfort premium sofa. Great for old school office spaces. </>,
        color: "Brown",
        mat: "Polyester",
        dim: "42 x 42 x 42",
        weight: "100KG",
    },
    {
        id: 3,
        name: "Small Couch Chairs",
        price: 400,
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
    {
        id: 5,
        name: "Table",
        price: 420,
        img: "/sofa-pics/5.png",
        model: <Table1 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 6,
        name: "Table 2",
        price: 420,
        img: "/sofa-pics/6.png",
        model: <Table2 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 7,
        name: "Shelf 1",
        price: 420,
        img: "/sofa-pics/7.png",
        model: <Shelf1 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
    {
        id: 8,
        name: "Desk 1",
        price: 420,
        img: "/sofa-pics/8.png",
        model: <Desk1 animate={false} />,
        desc: <>This is a the</>,
        color: "Brown",
        mat: "Wood",
        dim: "42 x 42 x 42",
        weight: "500",
    },
];

export default cards;
