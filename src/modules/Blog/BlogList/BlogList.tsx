import { useEffect, useState } from 'react';
import BlogItem from './BlogItem'
import { Blog } from '../../../types/types';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]|null>()
  useEffect(() => {
    const url  = 'https://burgos-be.onrender.com/blogs'
    axios.get(url).then((res) => setBlogs(res.data))
    

    
  },[]);
  
  return (
    <div className="relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]">
      {blogs?.map(blog =>(
        <article key={blog.id} className='blog-grid pb-[72px]'>
      <BlogItem {...blog}/>
        </article>
      ))}
    </div>
  )
}

export default BlogList