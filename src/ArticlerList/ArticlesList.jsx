import React from "react";
import s from "./ArticlesList.module.css"
import { Link } from "react-router-dom";


export const ArticleList = (props) => {
  return (
    <div>
      <ul>
          {props.articles.map((article, index) => (
            <li key={index}>
              <h4><Link to={`/article/${index}`}  className={s.listStyle}>{article.headline.main}</Link></h4>
            </li>
          ))}
        </ul>
    </div>
  );
};