import React from "react";
const PostsTable = (props) => {
  const { posts } = props;
  return (
    <div className="container">
      <table className="table table-success table-striped  ">
      
        <thead>
          <tr>
            <th>User Id</th>
            <th>Post Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button type="button" class="btn btn-primary">update
              {post.action }
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
