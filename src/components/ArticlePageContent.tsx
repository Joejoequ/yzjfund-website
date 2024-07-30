import React from 'react';




export interface Article {
    id: number;
    title: string;
    content: string;
    date: string;
    imageUrl?: string;

}
function ArticlePageContent({id,title,content,date,imageUrl}:Article){





    const formattedContent = content.replace(/\n/g, '<br/>');

    const formattedTitle = title.replace(/\n/g, '<br/>');
    return (



        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">


        <div className="col-lg-12 py-5 wow fadeIn news-container" data-wow-delay="0.5s">

            <div className="news-content">
                <h1 className="display-5 mb-4 news-heading" dangerouslySetInnerHTML={{ __html: formattedTitle}}></h1>
                <p id="time">{date}</p>




                {imageUrl ? (<div>
                        <p className="news_txt" dangerouslySetInnerHTML={{ __html: getContentExceptLastParagraph(content) }}>
                        </p>
                        <img src={imageUrl} alt=""/>

                        <p className="news_txt"> <br/><br/> {getLastParagraph(content)}
                        </p>

                </div>
                ) : (
                        <p className="news_txt"  dangerouslySetInnerHTML={{ __html: formattedContent }}>
                        </p>



                )}

            </div>
        </div>


        </div>


    );


}

function getLastParagraph(str: string): string {
    const paragraphs = str.split(/\n\n/);
    return paragraphs[paragraphs.length - 1];
}
function getContentExceptLastParagraph(str: string): string {
    const paragraphs = str.split(/\n\n/);
    paragraphs.pop();
    return paragraphs.join('<br/><br/>');
}
export default ArticlePageContent;


