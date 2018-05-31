import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Master extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isPostsLoading: false,
            posts: []
        }
    }

    fetchPosts() {
        return axios.get( 'http://localhost:4201/posts' )
            .then( posts => {
                console.log( posts.data );
                return posts.data;
            });
    }

    init() {
        this.setState(
            {
                isPostsLoading: true
            },
            () => this.fetchPosts().then( posts => this.setState({
                isPostsLoading: false,
                posts: posts
            }))
        );
    }

    componentDidMount() {
        this.init();
    }

    render() {
        return this.state.isLoading ? <div><br/><br/>Loading...</div> : (
            this.state.posts.length ? (
                <div className="master" style={{ minHeight: 300 }}>
                    <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                        {this.state.posts && this.state.posts.map( post => (
                            <li key={post.id} style={{ marginTop: 20 }}>
                                <NavLink activeClassName="active" to={'/posts/' + post.id}>{post.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : <div><br/><br/>Loading...</div>
        );
    }
}

export default Master;