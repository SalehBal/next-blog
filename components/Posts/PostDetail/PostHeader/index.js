import Image from 'next/image';
import React from 'react';
import css from './PostHeader.module.css';

function PostHeader({ title, image }) {
    return (
        <header className={css.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </header>
    );
}

export default PostHeader;
