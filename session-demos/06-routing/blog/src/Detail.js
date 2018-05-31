import React, { Component } from 'react';
import axios from 'axios';

export default class Detail extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isPostLoading: true,
            post: null,
            postId: 0
        };
    }

    fetchPost( postId ) {
        return axios.get( 'http://localhost:4201/posts/' + postId )
            .then( post => post.data )
    }

    init() {
        this.setState(
            {
                isPostLoading: true,
                postId: this.props.match.params.postId
            },
            () => this.fetchPost( this.props.match.params.postId ).then( post => this.setState({
                isPostLoading: false,
                post: post
            }))
        )
    }

    // takes care of post fetch on initial load
    componentDidMount() {
        this.init();
    }

    // takes care of post fetch after initial load and everytime the route changes
    componentDidUpdate( prevProps, prevState ) {
        if( prevState.postId !== this.props.match.params.postId  ) {
            this.init();
        }
    }

    render() {
        return this.state.post ? (
            <div>
                <h1>{this.state.post.title}</h1>
                <hr />
                <article dangerouslySetInnerHTML={{ __html: this.state.post.text }}></article>
            </div>
        ) : null;
    }
}