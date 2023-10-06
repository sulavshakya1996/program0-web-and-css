import React from 'react'

const App = () => {
  const persons = ['ram', 'shyam', 'hari', 'anjali'];
  const [i, o, p, q] = persons;
  return (
    <div>
      {i}
      <br />
      {o}
      <br />
      {p}
      <br />
      {q}

    </div>
  )
}

export default App
