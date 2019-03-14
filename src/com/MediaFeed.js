import React, { Component } from 'react';
import './MediaFeed.css';

class MediaFeed extends Component {

    renderFeed(data) {
        let toRet = []
        if (Array.isArray(data)) {
            toRet = data.map((item, index) => {
                return (
                    <div className="post" key={index + item.title}>
                        <div className="title">{item.title}</div>
                        <img src={item.url} alt={item.title}/>
                    </div>
                )
            })
        }
        return toRet
    }

    render() {

        const { data } = this.props

        return (
            <div className="feed">
                {this.renderFeed(data)}
            </div>
        );
    }
}

export default MediaFeed;
