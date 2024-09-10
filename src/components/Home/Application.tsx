import React, { useState } from 'react';
import style from './home.module.scss';

const Application = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', need: '' });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const botToken = '7173121762:AAH0oUVwUlao3iIVqeBjDkHajSjcfU3PNxQ';
        const chatId = '1238343405';
        const text = `Заявка от клиента:\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nМне нужно: ${formData.need}`;

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
        <div className={style.Application} id="Application">
            <h2>ОСТАВЬТЕ ЗАЯВКУ, И МЫ ПЕРЕЗВОНИМ ВАМ В ТЕЧЕНИЕ 10 МИНУТ</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
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
            <p>
                *отправляя данные, вы соглашаетесь с{' '}
                <a href="">политикой конфиденциальности</a>
            </p>
        </div>
    );
};

export default Application;
