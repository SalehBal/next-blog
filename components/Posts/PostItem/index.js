import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import css from './PostItem.module.css';

function PostItem({ post }) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const imagePath = `/images/posts/${post.image}`;
    return (
        <li className={css.post}>
            <Link href={`/posts/${post.slug}`}>
                <div className={css.image}>
                    <Image src={imagePath} alt={post.title} width={300} height={200} />
                </div>
                <div className={css.content}>
                    <h3>{post.title}</h3>
                    <time>{formattedDate}</time>
                    <p>{post.excerpt}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;
