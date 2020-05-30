import React, {useState} from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log('clicked');
    }

    const [count, setCount] = useState(0);

    return (
        <>
          <button onClick={() => {setCount(c=>c+1); setCount(c=>c+1);}}>Click {count}</button>
          <h1>Hello { props.name }</h1>  
        </>
    )
}

export default Basic1
