import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return <div className='container'>
        <h1>Create post</h1>
        <PostCreate></PostCreate>
        <hr></hr>
        <h1>Posts</h1>
        <PostList></PostList>
    </div>;
};