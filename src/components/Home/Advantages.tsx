import Icon1 from "../../assets/images/icons/Advantages1.svg"
import Icon2 from "../../assets/images/icons/Advantages2.svg"
import Icon3 from "../../assets/images/icons/Advantages3.svg"
import Icon4 from "../../assets/images/icons/Advantages4.svg"
import style from "./home.module.scss"
const Advantages = () => {
  return (
    <div className={style.Advantages}>
        <h2>Наши преимущества:</h2>
        <div className={style.boxs}>
            <div className={style.box}>
                <img src={Icon1} alt="" />
                <p>Покажите нам картинку одежды и мы сошьем
                точно такой же, только гораздо дешевле!</p>
            </div>
            <div className={style.box}>
                <img src={Icon2} alt="" />
                <p>Пошив одежды высокого качества и в срок</p>
            </div>
            <div className={style.box}>
                <img src={Icon3} alt="" />
                <p>Большой ассортимент тканей и фурнитур!</p>
            </div>
            <div className={style.box}>
                <img src={Icon4} alt="" />
                <p>Сохраняем конфиденциальность ваших товаров!</p>
            </div>
        </div>
    </div>
  )
}

export default Advantages