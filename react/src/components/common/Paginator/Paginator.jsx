import classes from "../Paginator/Paginator.module.css";
import React, {useState} from "react";
import classNames from "classnames";

export const Paginator = (props) => {
    let pagesCount = props.totalItemsCount / props.pageSize;
    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    const portionSize = 10;

    let portionCount = Math.ceil(pagesCount / props.pageSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                return <span className={classNames( {[classes.selectedPage]: props.currentPage === p}, classes.pageNumber)}
                             onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
            { portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    );
};

export default Paginator;