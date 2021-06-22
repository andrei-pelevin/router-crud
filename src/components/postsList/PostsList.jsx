import { useState, useEffect } from 'react';
import PostItem from '../PostItem/PostItem';

function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const data = async () => {
            try {
                const response = await fetch(`http://localhost:7777/posts`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setPosts(data);
            } catch (e) {
                console.error(e);
            }
        }
        data();
    }, [])

    return (
        <div>
            <h3 className='m-3'>{posts.length > 0 ? 'Список постов:' : 'Здесь еще никто не писал, напиши первым'}</h3>
            {posts.map(item => <PostItem item={item} key={item.id} />)}
        </div>
    )
}
export default PostList;