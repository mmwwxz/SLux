import style from './details.module.scss'
// import BG from '../../assets/images/BG/Details/Banner.jpg'

const Banner = () => {
  const BG = 'https://rematelier.ru/wp-content/uploads/2021/03/poshiv-platya-na-zakaz.jpg'
  return (
    <div className={style.Banner} style={{backgroundImage:`url(${BG})`}}>
        <h1 className={style.title}>ПОШИВ ПЛАТЬЕВ</h1>
    </div>
  )
}

export default Banner