import style from './details.module.scss'

interface BannerProps {
  title: string;
  bg: string;
}

const Banner: React.FC<BannerProps> = ({ title, bg }) => {
  return (
    <div className={style.Banner} style={{ backgroundImage: `url(${bg})` }}>
      <h1 className={style.title} style={{textShadow:'1px 1px 1px black'}}>{title}</h1>
    </div>
  );
};

export default Banner;
