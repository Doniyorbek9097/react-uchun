import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <div className="about-me-box">
        <h1>Hey, I am DONIYORBEK ERGASHEV</h1>
        <p>
          - a web developer based in Namangan, Uzbekistan. In 2017, after
          <br/>
          <br/>
          graduated from Tashkent University of Information Technologies, I
          started my career as a front-end web developer. Over the last 3 years
          I have been building digital products and helping people bring their
          ideas come to life. I ,as a developer, love coding, learning a new
          technology, reading a book and having a coffee in the morning :).
        </p>
        <p>
          Enough about me. Let’s make the world a better place. If you have any
          cool projects or opportunities, get in touch! 
        </p>

        <div className="contact-box">
          <a href="tel:+99834073322">CONTACT</a>
        </div>
      </div>
      <div className="my-img-box">
        <img
          src="https://stackblitz.com/files/react-uchun/github/Doniyorbek9097/react-uchun/master/src/img/Rectangle%201459.png"
          alt=""
        />
      </div>
    </div>
  );
}
