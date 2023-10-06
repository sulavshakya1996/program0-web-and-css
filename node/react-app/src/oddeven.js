import React from 'react'

const App = () => {
  let i = 0;
  let evennum = [];
  while (i < 100) {
    i++;
    if (i % 2 === 0) {
      evennum.push(i);
    }
  }
  console.log(evennum);
  return (
    <div>

    </div>
  )
}

export default App
