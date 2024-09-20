import React from 'react';
import { useParams } from "react-router-dom";
import { Banner, Price } from "../components/Details";

const SEWdata = [
    {
        id: 1,
        title: "Пошив брюк",
        title2: "Пошив брюк",
        bg: "https://bespoked.ru/wp-content/uploads/0-5.jpg",
    },
    {
        id: 2,
        title: "Спорт-костюмы",
        title2: "Спорт-костюмы",
        bg: "https://img.championat.com/c/1200x900/news/big/f/n/modnye-zhenskie-sportivnye-kostyumy-2024-35-foto_1716462655392000800.jpg",
    },
    {
        id: 3,
        title: "Пошив худи",
        title2: "Пошив худи",
        bg: "https://exso.com.ua/wp-content/uploads/2021/06/Tolstovka-scaled.jpg",
    },
    {
        id: 4,
        title: "Пошив костюмов",
        title2: "Пошив костюмов",
        bg: "https://kanzler-style.ru/individualniy-poshiv/images/1025x400_obsh_2.jpg",
    },
    {
        id: 5,
        title: "Пошив блузок",
        title2: "Пошив блузок",
        bg: "https://ms312.ru/wp-content/uploads/2021/08/banner_blyzki_ms.png",
    },
    {
        id: 6,
        title: "Пошив платьев",
        title2: "Пошив платьев",
        bg: "https://mode-elegance.ru/images/poshiv/lingerie/clothes/modnoe-platie.jpg",
    },
];

const DetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Filter the data based on the id
    const sewItem = SEWdata.find(item => item.id.toString() === id);

    if (!sewItem) {
        return <div>Item not found</div>;
    }

    const { title, title2, bg } = sewItem;

    return (
        <main>
            <Banner title={title} bg={bg} />
            <Price title2={title2} />
        </main>
    );
};

export default DetailsPage;