import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect invoked");
    }, [])

    return (
        <div>
            <button onClick={() => setCount(p => p+1)}>Click {count}</button>
        </div>
    )
}

export default BasicUseEffect
