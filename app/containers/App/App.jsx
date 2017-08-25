import React, { Component } from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}