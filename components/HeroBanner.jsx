import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageCarousel from './ImageCarousel.jsx';

const BannerItem = (props) => {
    return (
        <div className="carousel__item">
            <img 
                src={`/hero-banner/${props.image}.jpg`} 
                alt="banner"
                style = {
                    {
                        display: 'block',
                        width: '100%',
                    }
                }
            />
            <style jsx>{`
                .carousel__item {
                    position: relative;
                    width: 720px;
                    height: 405px;
                    text-align: center;
                    background-color: bisque;
                }
                @media (max-width: 768px) {
                    .carousel__item {
                        width: 100vw;
                        height: 56.25vw;
                    }
                }
            `}</style>
        </div>
    );
};

class HeroBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const {data} = this.props;
        const banners = data.map((item, index) => {
            return (
                <BannerItem
                    key = {index}
                    {...item}
                >
                </BannerItem>
            );
        });

        return (
            <React.Fragment>
                <section className="hero-banner">
                    <div className="carousel__container">
                        <ImageCarousel
                            default_setting = {
                                {
                                    slideToShow: 1,
                                    slideToScroll: 1,
                                    draggable: true,
                                    infinite: true,
                                    auto: true,
                                    dots: true,
                                    dragSpeed: 1.2,
                                }
                            }
                        >
                            {banners}
                        </ImageCarousel>
                    </div>                  
                </section>
                <style jsx>{`
                    .hero-banner {
                        position: relative;
                        width: 100%;
                        background-color: #f9f9f9;
                        overflow: hidden;
                    }
                    .carousel__container {
                        position: relative;
                        width: 720px;
                        margin: 0 auto;
                    }
                    @media (max-width: 768px) {
                        .carousel__container {
                            width: 100vw;
                        }
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

HeroBanner.propTypes = {
    data: PropTypes.array.isRequired,
};
HeroBanner.defaultProps = {
    data: [
        {
            image: '1585153114_EimnJ6'
        }
    ]
};

export default HeroBanner;