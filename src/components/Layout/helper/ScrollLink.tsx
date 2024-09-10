import { MouseEvent, CSSProperties } from "react";

interface ScrollLinkProps {
  target: string;
  children: React.ReactNode;
  style?: CSSProperties; // Добавлено для поддержки стилей
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ target, children, style }) => {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress - 50);
        if (progress < 1) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <a href={target} onClick={handleScroll} style={style} className="link">
      {children}
    </a>
  );
};

export default ScrollLink;
