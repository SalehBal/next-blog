import React from 'react';
import PostItem from '../PostItem';
import css from './PostsGrid.module.css';
function PostsGrid({ posts }) {
    return (
        <ul className={css.grid}>
            {posts.map((post) => (
                <PostItem key={post.key} post={post} />
            ))}
        </ul>
    );
}

export default PostsGrid;
