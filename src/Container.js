import React, { Component } from 'react';
import Filters from './components/Filters';
import Grid from './components/Grid';
import { fetchRecipes } from './api';

// Container holds the state of our app
class Container extends Component {
    state = {
        recipes: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        fetchRecipes().then((res) => {
            this.setState({
                recipes: res.hits,
                isLoading: false,
            });
        });
    }

    render() {
        const { recipes, isLoading } = this.state;

        return (
            <div className="layout">
                <Filters />
                {recipes.length !== 0 && <Grid list={recipes} />}
                {isLoading && 'Loading...'}
            </div>
        );
    }
}

export default Container;
