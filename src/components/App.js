import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import '../styles.css';
import React from 'react';
import Input from './Input.js';
import Titles from './Titles.js';
import Time from './Time.js'


let textArray = [];

function App() {

  const [text, setText] = React.useState('');
  const [tittleArray, setTitleArray] = React.useState(['123']);


  function handleChangeInput(e) { 
    e.preventDefault()
    setText(e.target.value);

  }

  function addText() {
    textArray.push(text)
    setTitleArray([text])
  }
 
  return (
    <div className="body">
    <React.Fragment>
      <Swiper className="swiper-slide">
      <SwiperSlide className="main" id="main">
        <Input className="slide__input" onChange={handleChangeInput} onClick={addText}/>
        <div className="swiper-div">
          {textArray.map((item) => {return <Titles text={item} />})}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container" id="main">
         <Time className="timer" />
        </SwiperSlide>
        </Swiper>
    </React.Fragment>
    </div>
  );
}

export default App;
