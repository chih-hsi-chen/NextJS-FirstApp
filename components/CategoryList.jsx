import React, { Component } from 'react';
import ImageCarousel from './ImageCarousel.jsx';

const CategoryItem = (props) => {
    return (
        <a className="category-item" href="#">
            <div className="category-item__image">
                <div className="category-item__background"></div>
                <picture>
                    <img
                        className="image"
                        src={`/category/${props.image}.svg`}
                        alt="category item"
                    />
                </picture>
            </div>                
            <h1 className="category-item__header">
                {props.name}
            </h1>
            <style jsx>{`
                .category-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    position: relative;
                    width: 100%;
                    height: 140px;
                    max-width: 120px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    text-decoration: none;
                    overflow: hidden;
                }
                .category-item:hover {
                    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
                }
                .category-item__image {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                }
                .category-item__background {
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: 50%;

                    width: 45%;
                    padding-top: 45%;
                    background-color: rgb(224, 217, 217);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }
                .category-item__image .image {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: block;
                    width: 55%;
                    z-index: 2;
                    transform: translate(-50%, -50%);
                }
                .category-item__header {
                    font-size: 1rem;
                    font-weight: 500;
                    color: rgb(0, 0, 0, 0.8);
                }
            `}</style>
        </a>
    );
}


class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                {
                    name: '洋裝',
                    image: 'dress',
                    catid: 100,
                },
                {
                    name: '女上衣',
                    image: 'woman-t-shirts',
                    catid: 100,
                },
                {
                    name: '裙子',
                    image: 'woman-skirts',
                    catid: 100,
                },
                {
                    name: '女鞋',
                    image: 'woman-shoes',
                    catid: 100,
                },
                {
                    name: '牛仔褲',
                    image: 'clothes',
                    catid: 100,
                },
                {
                    name: '男T恤',
                    image: 'man-tshirts',
                    catid: 100,
                },
                {
                    name: '男短褲',
                    image: 'man-shorts',
                    catid: 100,
                },
                {
                    name: '男外套',
                    image: 'jackets',
                    catid: 100,
                },
                {
                    name: '男眼鏡',
                    image: 'glasses',
                    catid: 100,
                },
                {
                    name: '男長褲',
                    image: 'man-pants',
                    catid: 100,
                },
                {
                    name: '帽子',
                    image: 'hat',
                    catid: 100,
                },
                {
                    name: '洋裝',
                    image: 'dress',
                    catid: 100,
                },
                {
                    name: '女上衣',
                    image: 'woman-t-shirts',
                    catid: 100,
                },
                {
                    name: '裙子',
                    image: 'woman-skirts',
                    catid: 100,
                },
                {
                    name: '女鞋',
                    image: 'woman-shoes',
                    catid: 100,
                },
                {
                    name: '牛仔褲',
                    image: 'clothes',
                    catid: 100,
                },
                {
                    name: '男T恤',
                    image: 'man-tshirts',
                    catid: 100,
                },
                {
                    name: '男短褲',
                    image: 'man-shorts',
                    catid: 100,
                },
                {
                    name: '男外套',
                    image: 'jackets',
                    catid: 100,
                },
                {
                    name: '男眼鏡',
                    image: 'glasses',
                    catid: 100,
                },
                {
                    name: '男長褲',
                    image: 'man-pants',
                    catid: 100,
                },
                {
                    name: '帽子',
                    image: 'hat',
                    catid: 100,
                },
            ]
        };
    }
    render() {
        const {items} = this.state;
        let list = items.map(function(item, index) {
            return (
                <CategoryItem key={index} {...item}/>
            );
        });

        return (
            <section className="homepage-section category-list" id="category-section">
                <div className="l-wrapper">
                    <div className="homepage-section__header" id="category-list__header">
                        <h1>商品分類</h1>
                    </div>
                    <div className="homepage-section__content">
                        <ImageCarousel
                            default_setting = {
                                {
                                    slideToShow: 10,
                                    slideToScroll: 10,
                                }
                            }
                            responsive = {
                                [
                                    {
                                        breakpoint: 1200,
                                        setting: {
                                            slideToShow: 8,
                                            slideToScroll: 8,
                                        }
                                    },
                                    {
                                        breakpoint: 900,
                                        setting: {
                                            slideToShow: 5,
                                            slideToScroll: 5,
                                            scrollable: true,
                                        }
                                    },
                                    {
                                        breakpoint: 600,
                                        setting: {
                                            slideToShow: 3,
                                            slideToScroll: 3,
                                            scrollable: true,
                                        }
                                    }
                                ]
                            }
                        >
                            {list}
                        </ImageCarousel>
                    </div>
                </div>
            </section>            
        );
    }
}

export default CategoryList;