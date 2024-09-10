import style from './home.module.scss'
import Icon1 from '../../assets/images/icons/banner1.svg'
import Icon2 from '../../assets/images/icons/banner2.svg'
import Icon3 from '../../assets/images/icons/banner3.svg'

const Banner = () => {
  return (
    <div className={style.Banner}>
        <h1 className={style.title}>ШВЕЙНАЯ ФАБРИКА</h1>
        <p className={style.des}>ПОШИВ ОДЕЖДЫ НА ЗАКАЗ ЛЮБОЙ СЛОЖНОСТИ В КЫРГЫЗСТАНЕ</p>
        <div className={style.icons}>
            <div className={style.pros}>
                <img src={Icon1} alt="" />
                <p>Партии от <span>10</span> штук(трикотаж)</p>
            </div>
            <div className={style.pros}>
                <img src={Icon2} alt="" />
                <p>Сроки от <span>1</span> дня</p>
            </div>
            <div className={style.pros}>
                <img src={Icon3} alt="" />
                <p>Разработка <span>лекала</span></p>
            </div>
        </div>
    </div>
  )
}

export default Banner