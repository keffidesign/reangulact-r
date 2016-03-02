import {prepareJsx} from './ReactRenderUtils.es6';
import {Component} from 'react';

export default {

    internalConstructor(props, context) {

        this::Component(props, context);

        this.state = this.initialState(props);

        const jsx = this.render();

        this.render = () => this::prepareJsx(jsx);
    },

    initialState(props){
        return {...props}
    },

    createElement(type, props, ...children){

        return {type, props: props || {}, children: children.length ? children : null}
    },

    update(state, cb) {

        this.setState(state, cb);
    },

    componentWillUnmount() {

        this.done();
    },

    componentWillMount() {

        this.init();
    }
};