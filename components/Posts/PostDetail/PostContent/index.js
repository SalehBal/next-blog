import React from 'react';
import PostHeader from '../PostHeader';
import ReactMarkdown from 'react-markdown';
import css from './PostContent.module.css';
const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        content: '# This is a first post, blah blah blah',
        date: '2022-02-10',
    },
];

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS[0].slug}/${DUMMY_POSTS[0].image}`;
    return (
        <article className={css.content}>
            <PostHeader image={imagePath} title={DUMMY_POSTS[0].title} />
            <ReactMarkdown>{DUMMY_POSTS[0].content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;
