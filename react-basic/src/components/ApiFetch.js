import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const jsonPlaceholder = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])

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

    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>        
        </div>
    )
}

export default ApiFetch


// npm install axios
// https://jsonplaceholder.typicode.com/