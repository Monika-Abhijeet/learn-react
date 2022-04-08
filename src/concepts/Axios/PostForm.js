import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const post = this.state;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            placeholder="enter name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="enter name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            value={body}
            placeholder="enter name"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default PostForm;
