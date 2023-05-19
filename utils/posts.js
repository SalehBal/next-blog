import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    const fileSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postIdentifier}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: fileSlug,
        ...data,
        content,
    };
    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPostData = postFiles.map((postFile) => getPostData(postFile));
    allPostData.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
    return allPostData;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
}
