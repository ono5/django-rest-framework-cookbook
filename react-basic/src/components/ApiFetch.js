import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [clicked, setClicked] = useState(false)
    const jsonPlaceholder = `https://jsonplaceholder.typicode.com/posts/${id}`

    const handlerClicked = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        // axios.get(jsonPlaceholder)
        // .then(res => {
        //     setPosts(res.data)
        // })
        fetch(jsonPlaceholder, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })

    }, [clicked])

    return (
        <div>
            <input type="text" value={id} onChange={evt=>setId(evt.target.value)} />
            <br />
            <button type="button" onClick={handlerClicked}>Get post</button>
            <br />
            {posts.title}

            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>         */}
        </div>
    )
}

export default ApiFetch


// npm install axios
// https://jsonplaceholder.typicode.com/