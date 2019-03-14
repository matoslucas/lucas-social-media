import React, { Component } from 'react';
import FeedForm from './com/FeedForm'
import MediaFeed from './com/MediaFeed'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      feed: [],
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(values) {
    console.log(values)
    const updated = this.state.feed
    updated.push(values)
    this.setState(updated)
  }

  render() {
    const { feed } = this.state
    return (
      <div className="App">
        <FeedForm onSubmit={this.onSubmitHandler} />
        <MediaFeed data={feed} />
      </div>
    );
  }
}

export default App;
