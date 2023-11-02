import BlogItem from './BlogItem'
import articleData from "../../../data/article.json"

const BlogList = () => {
  return (
    <div className="relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]">
      {articleData.map(article =>(
        <article key={article.id} className='blog-grid pb-[72px]'>
      <BlogItem {...article}/>
        </article>
      ))}
    </div>
  )
}

export default BlogList