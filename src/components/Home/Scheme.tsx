import Icon1 from '../../assets/images/icons/Scheme1.svg'
import Icon2 from '../../assets/images/icons/Scheme2.svg'
import Icon3 from '../../assets/images/icons/Scheme3.svg'
import Icon4 from '../../assets/images/icons/Scheme4.svg'
import style from "./home.module.scss"
import ScrollLink from "../Layout/helper/ScrollLink";
import React from "react";

const Scheme = () => {
  return (
    <div className={style.Scheme}>
        <h2>СХЕМА РАБОТЫ С НАМИ</h2>
        <div className={style.icons}>
            <div className={style.pros}>
                <img src={Icon1} alt=""/>
                <p>
                    Оставляете заявку или звоните
                    <span>
            <a href="tel:+996552446644" className={style.phoneLink}> +996 (552) 44-66-44</a>
        </span>
                </p>
                <button>
                      <ScrollLink target="#Application">
                            Оставить заявку
                      </ScrollLink>
                </button>
            </div>

            <div className={style.pros}>
                <img src={Icon2} alt=""/>
                <p>Разрабатываем лекала
                    и <span>шьем образец</span></p>
            </div>
            <div className={style.pros}>
                <img src={Icon3} alt=""/>
                <p>Шьем партию</p>
            </div>
            <div className={style.pros}>
                <img src={Icon4} alt=""/>
                <p>Упаковываем одежду
                    и <span>отгружаем партию</span></p>
            </div>
        </div>
    </div>
  )
}

export default Scheme