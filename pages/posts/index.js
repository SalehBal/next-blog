import React from 'react';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../utils/posts';
function PostsPage({ posts }) {
    return <AllPosts posts={posts} />;
}

export function getStaticProps(context) {
    const posts = getAllPosts();
    return {
        props: { posts: posts },
        revalidate: 1800,
    };
}

export default PostsPage;
