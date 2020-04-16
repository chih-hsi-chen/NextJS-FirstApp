import css from 'styled-jsx/css';

export default css`
.card-section {
    background-color: white;
    padding: 10px 0;
}
.card-section__content {
    position: relative;
    width: 100%;
}
.card-product {
    margin: 0 5px;
}
.card-product__link {
    position: relative;
    width: 100%;    
}
.product-link__top {
    position: relative;
    width: 100%;
    background-color: rgb(164, 164, 164);
}
.link-top__image {
    display: block;
    position: relative;
    width: 100%;
    padding-top: 100%;
}
.link-top__image > img {
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}
.card-section__title .title {
    display: flex;
    align-items: flex-end;
}
.card-section__title .title__text {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: var(--section-title-color, #85599c);
}
.card-section__title .title__more-link {
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: #a297de;
    margin-left: 1rem;
}
.product-link__bottom {
    display: block;
    overflow: hidden;
    text-decoration: none;
    color: #39393e;
}
.product-link__bottom .title {
	font-weight: 700;
	color: #39393e;
	margin: 0;
	margin-top: 6px;
	font-size: 14px;
	
	white-space: normal;
    height: 40px;
    line-height: 1.4;

    overflow: hidden;
    -webkit-line-clamp: 2;    
	text-overflow: ellipsis;
	display: -webkit-box;
    -webkit-box-orient: vertical;    
}

.card-product__details {
    position: relative;
    display: block;
}
.card-product__details .brand {
    text-decoration: none;
}
.card-product__details .brand:hover {
    text-decoration: underline;
}
.card-product__details .brand {
	margin: 6px 0;
	color: #66666a;
	font-weight: 400;
	font-size: 14px;
	overflow: hidden;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
	max-width: 100%;
}

.card-product__details .price {
	color: #502853;
	display: inline-block;
	font-weight: 500;
	font-size: 14px;
	margin-right: 6px;
}
`;