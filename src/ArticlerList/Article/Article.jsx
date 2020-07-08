import React from "react";
import { Link } from "react-router-dom";
import s from "./Article.module.css"



export const Article = (props) => {
  return (
    <div>
      <h1 className={s.header}>{props.article.abstract}</h1>
      <p>{props.article.lead_paragraph}</p>
      <div>
        <a href={props.article.web_url} target="_blank" rel="noopener noreferrer" >Full article here!</a>
      </div>
      <Link to={`/`} className={s.listStyle}>Back to articles list.</Link>
    </div>
  );
};