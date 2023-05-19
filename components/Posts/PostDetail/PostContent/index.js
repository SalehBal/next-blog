import React from 'react';
import PostHeader from '../PostHeader';
import ReactMarkdown from 'react-markdown';
import css from './PostContent.module.css';

function PostContent(p = { post }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    return (
        <article className={css.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;
