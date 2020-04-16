import React, { Component } from 'react';

import Header from './Header.jsx';
import HeroBanner from './HeroBanner.jsx';
import CategoryList from './CategoryList.jsx';
import ProductCardList from './ProductCardList.jsx';
import FeatureList from './FeatureList.jsx';
import Footer from './Footer.jsx';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() { 
        return (
            <div className="main-container">
                <Header />
                <main>
                    <HeroBanner 
                        data = {
                            [
                                {
                                    image: '1585153114_EimnJ6'
                                },
                                {
                                    image: '1585713488_MR5uJ3'
                                },
                                {
                                    image: '1585758154_Udj9DC'
                                },
                                {
                                    image: '1585894852_uQYw2r'
                                },
                            ]
                        }
                    />
                    <CategoryList />
                    <ProductCardList
                        sec_name = '限時特賣'
                        ref_link = '/browse?ref_sec=flash-sale'
                    />
                    <ProductCardList
                        sec_name = '熱銷排行榜'
                        ref_link = '/browse?ref_sec=rank'
                    />
                    <FeatureList />
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default Main;