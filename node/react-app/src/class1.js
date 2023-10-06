import React from 'react'

const App = () => {
  let some = ``;
  for (let i = 0; i <= 70; i++) {
    some += ` <p>  ${i} <\p>`;
    console.log(i);
  }




  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: some }}></div>
    </div >
  )
}

export default App