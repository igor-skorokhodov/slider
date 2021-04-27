import React from 'react';

function Time() {
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
    const [milliseconds, setMilliseconds] = React.useState(0);
  
    React.useEffect(() => {
      requestAnimationFrame(() => {
        const date = new Date();
        setMilliseconds(date.getMilliseconds());
        setSeconds(date.getSeconds());
        setMinutes(date.getMinutes());
        setHours(date.getHours());
      });
    });
  
  
    return (
      <h2 className="swiper-slide">{hours}:{minutes}:{seconds}:{milliseconds}</h2>
    );
  }

  export default Time;