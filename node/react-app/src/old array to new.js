import React from 'react'

const App = () => {
  const persons = ['ram', 'hari', 'shyam', 'anjali'];
  const a = persons[0];
  const b = persons[3];
  console.log([...persons, 'gita', 'harka']);
  return (
    <div>
      <h1>{a}</h1>
      <h2>{b}</h2>
    </div>
  )
}

export default App
