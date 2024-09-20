import React from 'react';
import style from "./details.module.scss";

interface PriceProps {
    image?: string;
    title2?: string;
}

const Price: React.FC<PriceProps> = ({ image, title2 }) => {
    const pricedata = [
{
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
        {
            id: 1,
            name: "Платье трикотажное",
            p501: "680",
            p300_500: "780",
            p100_300: "880",
        },
    ];

    return (
        <div className={style.Price}>
            <h2>{title2 || "ЦЕНЫ НА ПОШИВ ПЛАТЬЕВ"}</h2>
            {image && <img src={image} alt="Background" className={style.image} />}
            <table className={style.table}>
                <thead>
                    <tr className={style.head}>
                        <td rowSpan={2}>НАИМЕНОВАНИЯ</td>
                        <th colSpan={3}>КОЛИЧЕСТВО ЕДИНИЦ</th>
                    </tr>
                    <tr className={style.head}>
                        <td>от 501</td>
                        <td>от 300-500</td>
                        <td>от 100-300</td>
                    </tr>
                </thead>
                <tbody>
                    {pricedata.map((item) => (
                        <tr key={item.id} className={style.body}>
                            <td>{item.name}</td>
                            <td>от {item.p501} ₽</td>
                            <td>от {item.p300_500} ₽</td>
                            <td>от {item.p100_300} ₽</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Price;
