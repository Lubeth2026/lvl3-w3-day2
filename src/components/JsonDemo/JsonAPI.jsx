//MAP with APIs Example//
import { useEffect, useState } from "react"
import Posts from "./Posts";

export default function JsonAPI(){
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
//Hard Coded Filter//
    const [userId, setUserId] = useState(1);
    useEffect(()=>{
        async function getPosts() {
            try {
               const res = await fetch("https://jsonplaceholder.typicode.com/posts");
               const data = await res.json()
               setPosts(data)
            } catch (error) {
               console.log(error)
               setError("Did not get the posts") 
            }
        }
        getPosts()
    }, [])

//Hard Coded Filter//
const filterPosts = posts.filter(post => post.userId === userId);

    return(
        <>
        <div>JSON API Demo
            {filterPosts.map((post)=>(
                <Posts key={post.id} title={post.title} body={post.body}/>
            ))}
        </div>
        {error && <p>{error}</p>}
        </>
    )
}