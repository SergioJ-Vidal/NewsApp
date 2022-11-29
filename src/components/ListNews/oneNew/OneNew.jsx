import React, { useEffect, useContext } from 'react'
import { GlobalContext } from "../../../context/GlobalState";


export const ListNews = () => {

    const { news, getNews } = useContext(GlobalContext);

    useEffect(() => {

        getNews();

    }, []);

    const oneNew = news.map((resultNew) => {

        return (
            <div key={resultNew.id} className="new-container">
                <div className="new-box">
                    <span className="title">{resultNew.title}</span>
                    <span className="date">{resultNew.published_date}</span>
                    <span className="body">{resultNew.abstract}</span>
                    <span className="author">{resultNew.byline}</span>
                    
                    <a href={resultNew.url} target="_blank" rel="noopener noreferrer"> <button className="button" >
                        Read Full New
                    </button></a>
                </div>
            </div>
        );

    });

    return <>{oneNew}</>;

};

export default ListNews;