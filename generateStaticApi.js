const fs = require('fs').promises
const matter = require('gray-matter');
const path = require('path')

const BLOG_PATH = path.join('content', 'blog')
const STATIC_API_PATH = path.join('public', 'api')

readFolders()

async function readFolders () {
  try {
    const folders = await fs.readdir(BLOG_PATH)
    const allDirs = folders.map(folder => readFile(folder))
    const allPosts = await Promise.all(allDirs)

    let lastPost = null

    for (const post of allPosts) {
      const content = await matter(post.content)
      content.excerpt = getExcerpt(content.content)
      content.slug = post.folder
      
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

    await fs.mkdir(STATIC_API_PATH)

    await fs.writeFile(
      path.join(STATIC_API_PATH, 'lastPost.json'),
      JSON.stringify(lastPost, null, 2)
    )
    console.log(`Static JSON API successfully written.`)
  } catch (error) {
    console.error(error)
  }
}

function getExcerpt (str, limit = 240) {
  if (!str) return
  const lastWordIndex = str.lastIndexOf(' ', limit)
  return `${str.substr(0, lastWordIndex)}...`
}

async function readFile (folder) {
  const content = await fs.readFile(path.join(BLOG_PATH, folder, 'index.md'), 'utf-8')

  return {
    content,
    folder
  }
}
