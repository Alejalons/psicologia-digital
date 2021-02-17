import React from 'react';
import './Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    }

    return (
        <div className="col-12 mt-3 ml-2">
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <p onClick={() => paginate(number)}  className='page-link'>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;