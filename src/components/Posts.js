import React from 'react'

const Posts = ({ posts, loading }) => {

    if(loading){
        return <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span className="sr-only">Loading...</span>
      </button>;
    }

  return (
    <ul className="list-group mb-4">
        {posts.map((post) => (
            <li key={post.id} className='list-group-item'>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
        ))}
    </ul>
  )
}

export default Posts