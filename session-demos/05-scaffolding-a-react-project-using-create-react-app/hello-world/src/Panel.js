import React from 'react';

import './Panel.css';

import imgUrl from './lion-cartoon.jpg'; /* the url for the image is returned by import statement */

class PanelHeading extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="panel-heading" onClick={this.props.toggleState} style={{ cursor: 'pointer' }}>
                {this.props.title}
                <span className="pull-right">{this.props.isOpen ? '-' : '+'}</span>
            </div>
        );
    }
}

class PanelBody extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let el = null;
        if( this.props.isOpen ) {
            el = <div className="panel-body">{this.props.children}</div>
        }
        return el;
    }
}

export default class Panel extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isOpen: true
        };

        this.toggleState = this.toggleState.bind( this );
    }

    toggleState() {
        this.setState( currentState => {
            return {
                isOpen: !currentState.isOpen
            };
        });
    }

    render() {
        console.log( '[inside Panel render()] this.state = ', this.state );
        let panel = (
            <div className="panel panel-default">
                <img src={imgUrl} style={{ width: 32 }}/>
                <PanelHeading title={this.props.heading} toggleState={this.toggleState} isOpen={this.state.isOpen} />
                <PanelBody isOpen={this.state.isOpen}>
                    {this.props.children}
                </PanelBody>
            </div>
        );
        return panel;
    }
}