import React, { Component } from 'react';
import './FeedForm.css';

class FeedForm extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            url: "",
            title: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handleChange(event) {
        const updated = this.state
        updated[event.target.name] = event.target.value
        this.setState(updated)
    }

    onClickHandler() {
        const { onSubmit } = this.props
        onSubmit(this.state)
        this.setState({
            url: "",
            title: "",
        })

    }

    render() {
        const { url, title } = this.state
        return (
            <div className="form">
                <div className="box">
                    <input
                        type="text"
                        name="url"
                        placeholder="Enter URL"
                        value={url}
                        onChange={this.handleChange} />
                </div>
                <div className="box">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={this.handleChange} />
                    <button onClick={this.onClickHandler}>New Post</button>
                </div>
            </div>
        );
    }
}

export default FeedForm;
