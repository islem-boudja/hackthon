import React from 'react'
import { Button } from './ui/button'
import { ArticleT } from '@/Types'
import Custombutton from './Custombutton'
const Article = ( {article}: {article : ArticleT | null}) => {
    const paragraph = [article?.paragraphs[0] ,article?.paragraphs[1]];
    const combinedString = paragraph.join('\n');
const formattedString = combinedString?.replace(/\\n/g, '\n').replace(/\\r/g, '\n');

return (

        <div className=' content w-1/2  flex flex-col items-center gap-7 '>
            <h1 className=' font-bold text-2xl '>{article?.title}</h1>
            <p className=' text-sm'>{formattedString}</p>
            
            <Custombutton _id={article?._id}/>
        </div>
)
}

export default Article
