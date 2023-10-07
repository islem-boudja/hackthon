import { ArticleT } from '@/Types'
import { GetallArticles } from '@/api'
import Article from '@/components/Article'

const page = async () => {
  const data: Array<ArticleT> = await GetallArticles()
  
  return (
    <div className=" mt-20 ">
      <p className=" text-6xl font-bold pl-10">DATA SETS :</p>
        {data?.map((article : ArticleT) => (
          <div className=" py-10 border-2 border-secondary-font rounded-2xl my-5">
            <div className=' translate-x-1/4'>
            <Article article={article} />
            </div>
            </div>
        ))}
    </div>
  )
}

export default page
