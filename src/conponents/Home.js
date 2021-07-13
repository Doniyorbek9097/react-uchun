import React from 'react';
import Form from "./Form";
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
            <Form/>
        </div>
      </section>

      <section className="home-section-3">
        <h1>Почему мы?</h1>
        <div className="why-us-box">
          <div className="why-us-card">
            <img
              src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/location-pin.png"
              alt="location"
            />
            <h1>Выезжаем</h1>
            <p>Не нужно никуда ехать, что вы? Мы сами к вам приедем</p>
          </div>
          <div className="why-us-card">
            <img
              src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/settings%20(1).png"
              alt="settings"
            />
            <h1>Ремонтируем</h1>
            <p>15 минут примерно постоите рядышком и все — готово</p>
          </div>
          <div className="why-us-card">
            <img
              src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/settings.png"
              alt=""
            />
            <h1>Довольны как слон</h1>
            <p>
              Пока вы радуетесь сделанному устройству, мы вам еще гарантию
              вручим.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section-4">
        <div className="table-box">
          <table>
            <tbody className="table-1">
              <thead>
                <tr>
                  <th>Частые неисправности</th>
                </tr>
              </thead>

              <tr>
                {' '}
                <td>Не загружается</td> <td>от 750 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не включается</td> <td>от 750 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Сам выключается</td> <td>от 750 Р</td>
              </tr>
              <tr>
                {' '}
                <td>Шумит</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Сильно греется</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Медленно работает</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Проблемы со звуком</td> <td>от 900 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не видит устройства</td> <td>от 220 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не работает веб-камера</td> <td>от 500 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Интернет, Wi-Fi</td> <td>от 170 Р</td>{' '}
              </tr>
            </tbody>

            <tbody className="table-2">
              <thead>
                <tr>
                  <th>Цены на ремонт</th>
                </tr>
              </thead>

              <tr>
                {' '}
                <td>Не загружается</td> <td>от 750 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не включается</td> <td>от 750 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Сам выключается</td> <td>от 750 Р</td>
              </tr>
              <tr>
                {' '}
                <td>Шумит</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Сильно греется</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Медленно работает</td> <td>от 870 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Проблемы со звуком</td> <td>от 900 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не видит устройства</td> <td>от 220 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Не работает веб-камера</td> <td>от 500 Р</td>{' '}
              </tr>
              <tr>
                {' '}
                <td>Интернет, Wi-Fi</td> <td>от 170 Р</td>{' '}
              </tr>
            </tbody>

           <div className="table-btn">
           <a href="#">Показать все</a>
           </div>
          </table>
        </div>
      </section>

      <section className="home-section-5">
              <h1>Нам доверяют</h1>
              <div className="slider-box">
                <div className="slider-text">
                  <h1>Евгений</h1>
                  <p>«Перебрал несколько предложений от сервисных центров, в компании Spets Apple больше всего понравилось, на все вопросы ответили и цены подошли. Описал беспокоящие в работе iPad 7 моменты, сразу получил возможные пути решения. Курьер забрал устройство на диагностику, отзвонились по итогам осмотра, выполнили ремонт. Результат порадовал, без лишнего ожидания и наценок. Спасибо! Буду рекомендовать всем знакомым.»</p>
                
                </div>

                <div className="slider-img-box">
                  <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/cheerful-man-pointing-finger-left-advertise-product%201.png" alt=""/>
                </div>

                <div className="slider-btn">
                    <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/prevbtn.png" alt=""/>
                    <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/nextbtn.png" alt=""/>
                  </div>
              </div>
        </section>

        <section className="home-section-6">
              <div className="content-box">
               <div className="img-box">
               <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Rectangle%201466.png" alt=""/>
               </div>
                <div className="text-box" style={{textAlign:"right"}}>
                    <h1>Какие виды работ по ремонту Macbook выполняются на дому</h1>
                    <br/>
                    <br/>
                    <p>Нередко из-за несоблюдения правил эксплуатации даже надежные ноутбуки Apple выходят из строя. Причиной могут быть удары или падения, попадание жидкости и грязи внутрь техники. При появлении проблем не пытайтесь устранить их самостоятельно, и незамедлительно обращайтесь к специалистам нашего сервиса, специализирующегося на ремонте Macbook, Мы поможем в случаях, когда произошли механические повреждения корпуса, устройство не включается, не работает экран или клавиатура, не заряжается батарея, замечены проблемы с охлаждением, или выявлены другие неполадки в работе.
<br/>
<br/>
Если внешний воздействий не было, в ряде случаев работоспособность ноутбука можно восстановить путем переустановки операционной системы. Также мы выполняем базовые настройки, включая создание аккаунта Apple ID, устанавливаем программы (Skype, MS Office, браузеры и другие), антивирусную защиту, настраиваем периферийное оборудование. 
Все задачи, при которых не требуется сложный ремонт Макбук, быстро выполняются в домашних условиях или в офисе. Также на месте может быть произведена чистка, замена некоторых запчастей и элементов конструкции с целью модернизации.</p>
                </div>

    

              </div>

              
              <div className="content-box">
                <div className="text-box" style={{textAlign:"left"}}>
                    <h1>Ремонт ноутбуков Apple в сервисном центре</h1>
                    <br/>
                    <br/>
                    <p>Если по результатам выполненной диагностики мастера выявили серьезные поломки, которые невозможно устранить на месте, техника будет бесплатно доставлена в наш сервисный центр, выполняющий ремонт ноутбуков Apple. Мы быстро и аккуратно устраняем неисправности любой сложности на высокотехнологичных стендах. Все необходимые элементы и комплектующие – видеокарты, тачпады, клавиатуры, корпусные детали, аккумуляторы и другие, всегда есть на складе, поэтому клиентам не приходится долгое время ждать их доставки. На все проведенные работы предоставляется гарантийный срок.</p>
                </div>

                <div className="img-box">
               <img src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Rectangle%201468.png" alt=""/>
               </div>
             
    

              </div>

        </section>
    </div>
  );
}
