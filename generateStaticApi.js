const fs = require('fs/promises')
const matter = require('gray-matter');
const path = require('path')

const BLOG_PATH = path.join('content', 'blog')
const STATIC_API_PATH = path.join('public', 'api', 'lastPost.json')

async function readFolders () {
  const folders = await fs.readdir(BLOG_PATH)
  const allDirs = folders.map(folder => fs.readFile(path.join(BLOG_PATH, folder, 'index.md'), 'utf-8'))
  const allPosts = await Promise.all(allDirs)

  let lastPost = null

  for (const post of allPosts) {
    const content = await matter(post)
    
    // If first blog post, set to lastPost by default
    if (!lastPost) {
      lastPost = content
      continue
    }

    const lastPostDate = new Date(lastPost.data.date)
    const currentPostDate = new Date(content.data.date)

    if (currentPostDate > lastPostDate) {
      lastPost = content
    }
  }

  await fs.writeFile(STATIC_API_PATH, JSON.stringify(lastPost, null, 2))
}


readFolders()