import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {
    const elements = posts.map(({label, important}) => {
        return (
            <li className='list-group-item'>
                <PostListItem 
                    label={label}
                    important={important}
                />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;