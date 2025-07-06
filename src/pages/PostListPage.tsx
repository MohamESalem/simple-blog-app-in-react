import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

function PostListPage () {

    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
            } finally {
                setIsLoading(false);
            };
        };
        fetchPosts();
    }, []);

    if (isLoading) return <div className="app-status">Loading posts...</div>
    if (error) return <div className="app-status">Error: {error}</div>
    return(
        <div className="post-list-page">
            <h1>React Blog</h1>
            <div className="post-list">
                {
                    posts.map(post =>(
                        <div key={post.id} className="post-card">
                            <h2>{post.title}</h2>   
                            <Link to={`/post/${post.id}`} className="post-link">
                                Read More
                            </Link>
                        </div>
                    ))         
                }
            </div>
        </div>
    );
}


export default PostListPage;