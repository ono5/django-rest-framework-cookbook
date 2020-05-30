import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)

    useEffect(() => {
        console.log("useEffect invoked");
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(p => p+1)}>Click {count}</button>
            <input type="text" value={item} onChange={e => setItem(e.target.value)} />
        </div>
    )
}

export default BasicUseEffect
