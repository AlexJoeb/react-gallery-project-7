/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import key from './config.js';

import Images from './Components/Images';
import Navigation from './Components/Navigation';
import Search from './Components/Search';

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            image: [],
            isLoading: true,
        };
    }
    
   

    componentDidMount(){
        this.goFish();
    }

    goFish = ( text = "mountains" ) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${text}&extras=url_o&per_page=15&format=json&nojsoncallback=1`)
        .then(resp => {
            this.setState({
                image: resp.data.photos.photo,
                loading: false
            });
        })
        .catch(err => {
            console.log(`Error retrieving and parsing images's JSON data.`, err);
        })
    }
    render(){
        return (
            <div className="container">
                <h1>React Gallery Application</h1>

                <Router>
                    <Search onSearch={this.goFish} />
                    <Navigation performSearch={this.goFish} />

                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="airplanes" />}/>
                        <Route path={`match.search/:id`} component={Search}/>
                        
                        <Route path="/cats" render={(props) => <Images {...props} data={this.state.image} />} />
                        <Route path="/dogs" render={(props) => <Images {...props} data={this.state.image} />} />
                        <Route path="/rabbits" render={(props) => <Images {...props} data={this.state.image} />} />
                    </Switch>
                </Router>

                <div className="photo-container">
                    {
                        (this.state.loading) ? (<h4>We're loading your photos...</h4>) : <Images data={this.state.image} />
                    }
                </div>
            </div>
        )
    }
}