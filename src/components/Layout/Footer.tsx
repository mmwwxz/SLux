import React, { useState } from 'react';
import style from "./footer.module.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ need: '', name: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = '7173121762:AAH0oUVwUlao3iIVqeBjDkHajSjcfU3PNxQ';
    const chatId = '1238343405';
    const text = `Заявка от клиента:\n\nИмя: ${formData.name}\nМне нужно: ${formData.need}\nТелефон: ${formData.phone}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        alert('Данные отправлены успешно!');
      } else {
        alert('Ошибка при отправке данных.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка.');
    }
  };

  return (
    <footer className={style.Footer} id="Contacts">
      <h2>НАШИ КОНТАКТЫ</h2>
      <div className={style.borbottom}/>
      <div className={style.container}>
        <div className={style.left}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Имя"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              placeholder="Телефон"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="need"
              value={formData.need}
              onChange={handleChange}
              className="input_clear"
            >
              <option value="" disabled>Мне нужно...</option>
              <option value="Пошить">Пошить одежду</option>
              <option value="Лекала">Разработать лекала</option>
              <option value="Принт">Нанести принт</option>
              <option value="Вышивка">Сделать вышивку</option>
              <option value="Консультация">Консультация</option>
            </select>
            <input type="submit" value="Отправить" />
          </form>
        </div>
        <div className={style.right}>
          <p>г. Бишкек, Молдокулова улица, 28</p>
          <a href="tel:996 (552) 44-66-44" target="_black">+996 (552) 44-66-44</a>
          <a href="/" className={style.gmail}>ismailovaiba79@gmail.com</a>
          <div className={style.MAP}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d644.3727570027162!2d74.64265462527885!3d42.84579862919784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1sru!2skg!4v1725114407244!5m2!1sru!2skg">
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
