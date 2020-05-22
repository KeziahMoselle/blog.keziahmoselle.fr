const fs = require('fs/promises')
const matter = require('gray-matter');
const path = require('path')

const BLOG_PATH = path.join('content', 'blog')

async function readFolders () {
  const folders = await fs.readdir(BLOG_PATH)
  const allDirs = folders.map(folder => fs.readFile(path.join(BLOG_PATH, folder, 'index.md'), 'utf-8'))
  const content = await Promise.all(allDirs)
  
  
}


readFolders()