import React from 'react'

const App = () => {
  const persons = ['ram', 'hari', 'shyam', 'anjali'];
  const nums = [0, 22, 44, 33, 11, 10]
  const sortN = persons.sort();
  let Persons = ``;
  for (let i of persons) {
    Persons += `${i}   `;
  }
  const sortP = nums.sort();
  console.log(sortN);
  console.log(sortP);
  return (
    <div>
      {Persons}
      <img src="/images/logo512.png" alt="" />
    </div>
  )
}

export default App
