import React, { Component } from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import a from '../images/n1.jpg'
import b from '../images/n2.jpg'
import c from '../images/n3.jpg'
import d from '../images/n4.jpg'

export default class Images extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [a,b,c,d]
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
        } else {
        this.setState({
            currentImage: 0
        });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 3000);
    }

    render() {
        return (
            <div className="switch">
                <div style={{ backgroundRepeat: 'no-repeat', 
                    backgroundImage: `url(${this.state.images[this.state.currentImage]})`}}>
                    <Hero>
                        <Banner title={this.props.title}
                            subtitle={this.props.subtitle}>
                            <Link to={this.props.link} className="btn-primary">
                                {this.props.link_text}
                            </Link>
                        </Banner>
                    </Hero>
                </div>
            </div>
        );
    }
}