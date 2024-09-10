import { NavLink } from "react-router-dom"
import Icon1 from "../../assets/images/icons/About1.svg"
import Icon2 from "../../assets/images/icons/About2.svg"
import Icon3 from "../../assets/images/icons/About3.svg"
import Icon4 from "../../assets/images/icons/About4.svg"
import Icon5 from "../../assets/images/icons/About5.svg"
import Icon6 from "../../assets/images/icons/About6.svg"
import style from './home.module.scss'

const About = () => {
    const SEWdata = [
        {
            id: 1,
            logo: Icon1,
            name: "Пошив брюк",
            des: "Платья оптом",
            price: 360,
        },
        {
            id: 2,
            logo: Icon2,
            name: "Спорт-костюмы",
            des: "Классический свитшот, манжеты(кашкорсе/рибана)",
            price: 300,
        },
        {
            id: 3,
            logo: Icon3,
            name: "Пошив худи",
            des: "Толстовка с капюшоном, манжеты(кашкорсе/рибана), карман-кенгуру",
            price: 520,
        },
        {
            id: 4,
            logo: Icon4,
            name: "Пошив костюмов",
            des: "Классический свитшот, манжеты(кашкорсе/рибана)",
            price: 300,
        },
        {
            id: 5,
            logo: Icon5,
            name: "Пошив блузок",
            des: "Платья оптом",
            price: 360,
        },
        {
            id: 6,
            logo: Icon6,
            name: "Пошив платьев",
            des: "Платья оптом",
            price: 360,
        },
    ]; 
    
    return (
    <div className={style.About} id="About">
        <h2>О НАС</h2>
        <p className={style.des}>Швейный цех основан в 2005 году, вот уже более 19 лет мы занимаемся пошивом мужской и женской одежды для заказчиков из Москвы и регионов. В нашем распряжение собественное производство размером более 350М2, 40 швейных машин, и многое другое! Занимаемся крупным оптом (от 350 штук на модель). На нашей фабрике работают  лучшие проектировщики, обеспечивающие точность в разработке лекала любой сложности.</p>
        <div className={style.reports}>
            <div className={style.report}>
                <p><span>2000</span></p>
                <p>Платьев в неделю</p>
            </div>
            <div className={style.report}>
                <p><span>40</span></p>
                <p>швейных машин</p>
            </div>
            <div className={style.report}>
                <p><span>450</span>м²</p>
                <p>Помещение</p>
            </div>
        </div>
        <div className={style.Sewing}>
        <h2>ЧТО МЫ ШЬЁМ?</h2>
        <div className={style.sews}>
            {SEWdata.map((sew, index) => (
                    <NavLink to={`/details/${sew.name}/${sew.id}`} key={index} className={style.sew}>
                        <div className={style.image}>
                            <img src={sew.logo} alt={sew.name} />
                        </div>
                        <div className={style.text}>
                        <div>
                            <h3>{sew.name}</h3>
                            <p>{sew.des}</p></div>
                        </div>
                        <span>от {sew.price} Р</span>
                    </NavLink>
            ))}
        </div>
        </div>
    </div>
  )
}

export default About