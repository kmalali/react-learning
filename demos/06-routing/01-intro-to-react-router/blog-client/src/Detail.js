import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            post: null,
            postId: 0,
            isPostLoading: true
        }
    }
    
    fetchPost( postId ) {
        return axios.get( 'http://localhost:4201/posts/' + postId )
            .then( post => {
                return post.data;
            });
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
        );
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate( prevProps, prevState ) {
        if( prevState.postId !== this.props.match.params.postId ) {
            this.init();
        }
    }

    render() {
        console.log( 'render' );

        let el = null;
        if( this.state.post ) {
            el = (
                <div className="detail">
                    <h1>{this.state.post.title}</h1>
                    <hr />
                    <article dangerouslySetInnerHTML={{ __html: this.state.post.text }}></article>
                </div>
            );
        }

        return el;
    }
}

export default Detail;