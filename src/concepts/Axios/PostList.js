import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(this.state.posts);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "error retrieving data" });
      });
  };
  updatePost = (id) => {
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/" + id, {
        title: "hello",
      })
      .then((res) => {
        console.log(res);
        this.getPosts();
      });
  };

  deletePost = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log("post deleted");
        console.log(response);
      });
  };
  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div>
        List of posts
        <ul>
          {posts.length
            ? posts.map((post) => {
                return (
                  <li>
                    {post.title}
                    <button onClick={() => this.deletePost(post.id)}>X</button>
                  </li>
                );
              })
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </ul>
      </div>
    );
  }
}

export default PostList;
