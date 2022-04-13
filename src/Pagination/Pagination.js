import React, { useState, useEffect } from "react";
import PaginationTable from "./PaginationTable";
import Posts from "./Posts";
import './posts.css';

const Pagination = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(result => {
            console.log('Result', result);
            setPostData(result);
            setIsLoading(false)
        })
    }, []);

    //Getting current Posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = postData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        console.log('paginate called');
        setCurrentPage(pageNumber);
    }
    return(
        <>
            {isLoading && <div className="loader"></div>}
            <div className="flex-container">
                {currentPost.map(post => (
                    <Posts post={post} key={post.id}/>
                ))}
            </div>
            <div>
                <PaginationTable totalPosts={postData.length} postPerPage={postPerPage}
                paginate={paginate}/>
            </div>
        </>
    )
}

export default Pagination;