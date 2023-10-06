import React from 'react'

const App = () => {
  const person = {
    name: 'hari',
    age: 90,
    habits: ['dance', 'sing', 'read'],
    job: 'techno'


  }
  console.log(person);
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
    </div>
  )
}

export default App
