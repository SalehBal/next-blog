import React from 'react';
import AllPosts from '../../components/Posts/AllPosts';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
        date: '2022-02-10',
    },
];
function PostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />;
}

export default PostsPage;
