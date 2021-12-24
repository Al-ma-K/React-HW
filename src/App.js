// import React, { useState } from 'react';
import Card from './components/card/Card';
import arr from "./components/arr/Arr";
import { useState } from 'react';


function App() {
  let tmpArr = arr;
  console.log(tmpArr)
  const [tmp, setTmp] = useState(tmpArr)

  return (

    <div className = 'App'>
            {
              tmp.map(item =>
                <Card card = {item} key = {item.id}/>
              )
            }
          
            

    </div>

  );
}

export default App;
