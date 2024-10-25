import React from 'react'

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    //get pages numbers 
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map((num) => (
                <li key={num} className="page-item">
                    <a className="page-link" onClick={() => paginate(num)} href="#">{num}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Paginations