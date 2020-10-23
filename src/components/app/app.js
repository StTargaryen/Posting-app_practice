import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'


const App = () => {

    const data = [
        {id: 'fag', label:'Going to leart React', important: false},
        {id: 'nig', label:'Going to leart JavaScript', important: true},
        {id: 'cia', label:'Going to leart Vue', important: false},
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}
export default App;