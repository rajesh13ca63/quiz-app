import React, { useState } from "react";
import './posts.css';

const PaginationTable = ({totalPosts, postPerPage, paginate}) => {
    const pageNumbers = [];
    const [firstPage, setFirstPage] = useState(1);
    let [prevPage, setPrevPage] = useState('');
    let [bgColor, setBgColor] = useState([]);
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageNumberBgColor = (pageNumber) => {
        let pages = [...bgColor];
        let index = bgColor.indexOf('green');
        if(index>=0) {
            pages[index]='white';
        }
        console.log('index', index);
        pages[pageNumber] = 'green'
        setBgColor(pages);
        setPrevPage(pageNumber);
    }

    return (
        <div>
            <div className="pagination">
                <div className="page-item" style={{ backgroundColor: bgColor[1]}} >
                    <a onClick={()=> {paginate(prevPage); pageNumberBgColor()}} className="page-link">Previous</a>
                </div> 
                {pageNumbers.map(pageNumber => (
                    <div key={pageNumber} className="page-item" style={bgColor[pageNumber]==='green'? { backgroundColor: bgColor[pageNumber]}: {}}>
                        <a onClick={()=> {paginate(pageNumber);pageNumberBgColor(pageNumber)}} className="page-link">{pageNumber}</a>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default PaginationTable;