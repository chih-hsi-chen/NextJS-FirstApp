import css from 'styled-jsx/css';

export default css`
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
`;