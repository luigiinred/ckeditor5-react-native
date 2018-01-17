import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { WebView, View, Text } from 'react-native';

const ckeditor = require('./ckeditor.html');


export default class CKEditor extends Component {
    constructor() {
        super();
        this.state = {};
        this.onMessage = this.onMessage.bind(this);
    }

    onMessage(event) {
        this.setState({
            data: event.nativeEvent.data,
        });
    }

    render() {
        return (
            <View style={ { flex: 1 } }>
                <WebView
                    source={ ckeditor }
                    style={ { flex: 1 } }
                    onMessage={ this.onMessage }
                />
                <Text>{JSON.stringify(this.state.data)}</Text>
            </View>
        );
    }
}
