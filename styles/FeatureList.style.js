import css from 'styled-jsx/css';

export default css`
.values__block {
    flex: 1 0 0;
    max-width: 200px;
    padding: 20px 0;
    text-align: center;
}
.values__block:not(:last-of-type) {
    margin-right: 10px;
}
@media (max-width: 767px) {
    .values__block {
        flex: 1 0 auto;
        width: 200px;
        padding: 10px 0;
    }
}

.values__image {
    position: relative;
    width: 100%;
}
.values__image img {
    display: block;
    width: 100%;
}
.values__title {
    color: #39393e;
    font-weight: 700;
    display: block;
    margin-top: 14px;
    font-size: 16px;
    line-height: 1.4;
}
.values__details {
    color: #39393e;
    font-weight: 400;
    display: block;
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.6;
}
`;