import React, { useState } from "react";
import { CardText, Input, InputGroup } from "reactstrap";
import "./CardCarousel.css";

//Temporarily store data here
const PostsData = [
  {
    category: "Form1",
  },
  {
    category: "Form2",
  },
  {
    category: "Form3",
  },
];

class CardCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
    };
  }
  componentWillMount() {
    this.setState({
      posts: PostsData,
    });
  }

  render() {
    return (
      <div>
        <div className="app-card-list" id="app-card-list">
          {Object.keys(this.state.posts).map((key) => (
            <NewCard key={key} index={key} details={this.state.posts[key]} />
          ))}
        </div>
      </div>
    );
  }
}

class NewCardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="inp-grp">
          <CardText>
            <h5 className="cardheadtext">Create New User</h5>
          </CardText>
          <div className="cardInp">
            <h6 className="cardsubtext">User Type</h6>
          </div>
          <div className="cardInp">
            <h6 className="cardsubtext">User Name</h6>
            <InputGroup className="no-border">
              <Input className="phold" placeholder="Type Here" />
            </InputGroup>
          </div>
          <div className="cardInp">
            <h6 className="cardsubtext">Phone Number</h6>
            <InputGroup className="no-border">
              <Input className="phold" placeholder="Type Here" />
            </InputGroup>
          </div>
          <div className="cardInp">
            <h6 className="cardsubtext">Contractor Name</h6>
            <InputGroup className="no-border">
              <Input className="phold" placeholder="Type Here" />
            </InputGroup>
          </div>
        </div>
        <div className="cardInp buttoncon mb">
          <button className="button">Add User</button>
        </div>
      </div>
    );
  }
}

class NewCard extends React.Component {
  render() {
    return (
      <article className="card" style={{ width: "40%" }}>
        <NewCardBody
          title={this.props.details.title}
          text={this.props.details.text}
        />
      </article>
    );
  }
}

export default CardCarousel;
