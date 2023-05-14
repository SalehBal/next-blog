import React from 'react';
import css from './FeaturedPosts.module.css';
import PostsGrid from '../../Posts/PostsGrid';
function FeaturedPosts({ posts }) {
    return (
        <section className={css.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}

export default FeaturedPosts;
