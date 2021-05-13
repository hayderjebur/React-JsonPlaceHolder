import React, { useState } from 'react';

function Slides({ slides }) {
  let [count, setCount] = useState(0);

  console.log(count);
  return (
    <div>
      <div id='navigation' className='text-center'>
        <button
          disabled={count === 0}
          onClick={() => setCount(0)}
          data-testid='button-restart'
          className='small outlined'
        >
          Restart
        </button>
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(count--);
          }}
          data-testid='button-prev'
          className='small'
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (count < slides.length) setCount(count++);
          }}
          data-testid='button-next'
          className='small'
          disabled={count === slides.length}
        >
          Next
        </button>
      </div>
      <div id='slide' className='card text-center'>
        <h1 data-testid='title'>{slides[count].title}</h1>
        <p data-testid='text'>{slides[count].text}</p>
      </div>
    </div>
  );
}

export default Slides;
