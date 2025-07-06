import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";


interface Post {
    id: number;
    title: string;
    body: string;
};

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

function PostDetailPage() {

    const {postId} = useParams<{postId: string}>();

    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostandComments = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                if (!postResponse.ok) throw new Error('Failed to fetch post details');
                const postData: Post = await postResponse.json();
                setPost(postData);

                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                if(!commentsResponse.ok) throw new Error('Failed to fetch post comments');
                const commentsData: Comment[] = await commentsResponse.json();
                setComments(commentsData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchPostandComments();
    }, [postId]);

    if (isLoading) {
        return <div className="app-status">Loading post...</div>;
    }

    if (error) {
        return <div className="app-status">Error: {error}</div>;
    }

    if (!post) {
        return <div className="app-status">Post not found.</div>;
    }


    return(
        <div className="post-detail-page">

            <div className="post-detail">
                <Link to="/" className="back-link">
                    &larr; Back to All Posts
                </Link>
                <h1>{post.title}</h1>
                <p className="post-body">{post.body}</p>
                <hr />
                <h2>Comments</h2>
                <div className="comment-list">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-card">
                            <h3>{comment.name}</h3>
                            <p>{comment.body}</p>
                            <span>- {comment.email}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}


export default PostDetailPage;