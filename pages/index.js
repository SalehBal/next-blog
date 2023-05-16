import React from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import { getFeaturedPosts } from '../utils/posts';
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

function HomePage({ posts }) {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export default HomePage;

export function getStaticProps(context) {
    const featuredPosts = getFeaturedPosts();
    return {
        props: { posts: featuredPosts },
        revalidate: 1800,
    };
}
