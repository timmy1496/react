import classes from "../Paginator/Paginator.module.css";
import React from "react";

export const Paginator = (props) => {
    let pagesCount = props.totalUserCount / props.pageSize;
    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ''}
                             onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;