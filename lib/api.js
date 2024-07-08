import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');
const projectsDirectory = join(process.cwd(), '/app/(projects)/projects');

export function getProjectSlugs() {
  try {
    // return projectsDirectory;
    return fs.readdirSync(projectsDirectory).filter((file) => {
      if (file === '.DS_Store') {
        return false;
      } else if (file.endsWith('.css')) {
        return false;
      } else if (file === 'components') {
        return false;
      } else {
        return true;
      }
    });
  } catch (error) {
    console.log('err', error);
  }
}
// /Users/yashsharma/Desktop/PROJECTZ/personal-website/app/(projects)/projects

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
