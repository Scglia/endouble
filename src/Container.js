import React, { Component } from 'react';
import Filters from './components/Filters';
import Grid from './components/Grid';

// Container holds the state of our app
class Container extends Component {
    state = {
        // test value, will be replaced by api
        list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };

    render() {
        const { list } = this.state;

        return (
            <div>
                <Filters />
                <Grid list={list} />
            </div>
        );
    }
}

export default Container;
