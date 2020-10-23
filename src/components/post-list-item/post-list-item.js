import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            liked: false,

        };
        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);
    }

    onImportant() {
        this.setState(({important})=>({
            important: !important
        }))        
    }
    onLiked() {
        this.setState(({liked})=>({
            liked: !liked
        }))        
    }

    render() {
        const {label} = this.props;
        const {important, liked} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important'
        }
        if (liked) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                    onDoubleClick={this.onLiked}>
                    {label}
                </span>
                <div className="d-flex justyfy-content-center align-item-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
};