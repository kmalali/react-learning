import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Master extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isPostsLoading: true,
            posts: []
        }
    }

    fetchPosts() {
        return axios.get( 'http://localhost:4201/posts' )
            .then( posts => posts.data );
    }

    componentDidMount() {
        this.setState(
            {
                isPostsLoading: true
            },
            () => {
                this.fetchPosts().then( posts => this.setState({
                    isPostsLoading: false,
                    posts: posts
                }));
            }
        );
    }

    render() {
        return this.state.isPostsLoading ? <div>Loading...</div> : (
            <div>
                <ul>
                    {
                        this.state.posts.map( post => (
                            <li key={post.id}>
                                <NavLink activeClassName="active" to={"/posts/" + post.id}>{post.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}