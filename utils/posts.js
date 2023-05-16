import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const fileSlug = fileName.replace(/\.md$/, '');

    const postData = {
        slug: fileSlug,
        ...data,
        content,
    };
    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);
    const allPostData = postFiles.map((postFile) => getPostData(postFile));
    allPostData.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
}
