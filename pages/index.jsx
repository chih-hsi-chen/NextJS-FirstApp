import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import CategoryList from '../components/CategoryList.jsx';
import ProductCardList from '../components/ProductCardList.jsx';
import FeatureList from '../components/FeatureList.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
	return (
		<>
			<Head>
				<title>ExShop | 找到你心目中的設計</title>
			</Head>
			<div className="main-container">
				<Header />
				<main>
					<HeroBanner
						data={
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
						sec_name='限時特賣'
						ref_link='/browse?ref_sec=flash-sale'
					/>
					<ProductCardList
						sec_name='熱銷排行榜'
						ref_link='/browse?ref_sec=rank'
					/>
					<FeatureList />
				</main>
				<Footer />
			</div>
		</>
	);
}


export default Home;