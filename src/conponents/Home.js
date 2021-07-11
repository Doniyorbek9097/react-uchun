import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <section className="home-section-1">
        <div className="title-box">
          <div className="title">
            <h1>
              Ремонт <span>MacBook</span>
            </h1>
            <h2>за 15 минут</h2>
          </div>

          <div className="description-box">
            <p>Используем только оригинальные запчасти</p>
            <p>Выезжаем по всей Москве и области</p>
            <p>Бесплатный выезд мастера или доставка в сервис</p>
          </div>

          <div className="contact-btn">
            <a href="tel:+998934073322">Заказать звонок</a>
          </div>
        </div>

        <div className="title-img-box">
          <img
            src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Rectangle%201459.png"
            alt=""
          />
        </div>
      </section>

      <section className="home-section-2">
        <div className="skitka-box">
          <div className="title-box">
            <h1>Новым клиентам</h1>
            <h1> 25% скидка до 17 июня</h1>
            <p>Перезвоним через 2 минуты</p>
          </div>

          <form action="">
            <input type="text" placeholder="Телефон"/>
            <button>Заказать ремонт</button>
          </form>
        </div>
      </section>

      <section className="home-section-3">
        <div className="why-us-box">
          <h1>Почему мы?</h1>
          <div className="why-us-card">
            
          </div>
          <div className="why-us-card"></div>
          <div className="why-us-card"></div>
        </div>
      </section>
    </div>
  );
}
