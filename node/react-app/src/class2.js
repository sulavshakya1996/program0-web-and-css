import React from 'react'

const App = () => {

  const persons = ['ram', 'hari', 'shyam'];
  const per = ['gio', 'lio'];

  const newArray = [...persons, ...per];
  const numbers = [22, 44, 55, 66, 77, 99, 100];

  // let total = 0;
  // for (let i of numbers) {
  //   total += i;
  // }

  // const n = numbers.find(1, 5);

  // console.log(numbers.reverse());
  const m = numbers.splice(4, 1);
  console.log(m);
  // console.log(numbers);

  return (
    <div className='p-5'>


    </div>
  )
}

export default App