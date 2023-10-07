import { ArticleT } from "@/Types";
import { GetArticleByid } from "@/api";
import ArticlePageTitles from "@/components/Title";

export default async function Page({ params }: { params: { id: string } }) {
    const article : ArticleT  = await GetArticleByid(params.id);
    const formattedString = article.paragraphs
    .map((paragraph) => paragraph.replace(/\\n/g, '\n').replace(/\\r/g, '\n')).filter((paragraph) => paragraph !== 'The ' && paragraph !== 'In the ')
    .join('\n\n'); // Add two new lines for a blank line between paragraphs
    return (  
        <div className=" mt-10" style={{ whiteSpace: 'pre-line' }}>
            <div className="flex gap-3 text-[24px] font-[500] mb-[10px]">
                <p>ARTICLES</p>
                <p>|</p>
                <p>{article.published.split(':')[0].split('T')[0]}</p>
            </div>
            <ArticlePageTitles title={article.title}/>
            <div className=" font-medium mx-20 leading-7">
                {formattedString}
            </div>
        </div>
    );
}

