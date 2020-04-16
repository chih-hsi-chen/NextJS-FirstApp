import css from 'styled-jsx/css';

export default css`
    .ex-header {
        position: relative;
        width: 100%;
        padding: 20px 0 5px;
        box-shadow: 0 2px 0 0 rgba(211, 211, 211, 0.4);
        z-index: 99;
        background-color: white;
    }

    .inner-header {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
    }
    @media (min-width: 948px) {
        .inner-header {
            padding: 0;
        }
    }

    .inner-header__leftside {
        display: flex;
        align-items: center;
        margin-right: 20px;
        flex-grow: 1;
    }
    .header__logo {
        flex: 0 0 120px;
    }
    .header__logo .brand {
        width: 100%;
        display: block;
    }
    .header__search {
        flex: 1;
        max-width: 600px;
        overflow: hidden;
        margin-left: 20px;
    }
    .search {
        display: flex;
        align-items: center;
    }
    .search__dropdown select[name="category"] {
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        height: 40px;
        padding-left: 10px;
        padding-right: 20px;
        font-size: 16px;
        background-color: rgb(242, 242, 242);
    }
    .search__input {
        flex: 1;
    }
    .search__input > input {
        width: 100%;
        height: 40px;
        padding: 8px 15px;
        border: none;
        font-size: 16px;
        color: #545454;
        background-color: rgb(242, 242, 242);
        transition: background 0.3s;
    }
    .search__input > input:focus {
        background: white;
        border: 1px solid rgb(207, 99, 219);
    }
    .search__submit {
        padding: 10px;
        outline: 0;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        height: 40px;
        font-size: 16px;
        color: white;
        background-color: rgb(188, 118, 196);
        cursor: pointer;
    }
    .header__rightside {
        display: flex;
        align-items: center;
        flex: 0 0 auto;    
    }
    .tab {
        padding: 0;
        background-color: transparent;
        border: none;
        outline: 0;
        cursor: pointer;
    }
    .header__rightside .tab:not(:last-of-type) {
        margin-right: 30px;
    }
    .rightside__sign {
        font-size: 14px;
        font-weight: bold;
        color: rgb(165, 62, 177);
        border: 2px solid rgb(165, 62, 177);
        border-radius: 5px;
        padding: 4px 6px;
        height: 28px;
        line-height: 14px;
    }
    .tab:hover {
        color: rgb(204, 114, 214);
    }
    .rightside__sign:hover {
        border-color: rgb(204, 114, 214);
    }
    .rightside__searchBtn {
        display: none;
    }

    .tab-icon {
        position: relative;
    }
    .tab-icon :global(.tab-icon__icon) {
        --icon-size: 26px;

        display: block;
        font-size: var(--icon-size);
        width: var(--icon-size);
        height: var(--icon-size);
    }
    #searchbtn {
        --icon-size: 24px;
    }

    .tab-icon__label {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 22px;
        width: 22px;
        height: 22px;
        line-height: 22px;
        background-color: rgb(165, 62, 177);
        border-radius: 50%;

        color: white;
        font-size: 10px;
        font-weight: 700;
        text-align: center;

        transform: translate(50%, -50%);
    }
    .rightside__sign > .tab-icon{
        display: none;
    }

    /*  navbar header  */
    .main-nav__list {
        list-style: none;
        display: flex;
    }
    .main-nav__item {
        position: relative;
        flex: 0 0 calc(12.5% - 10px);
        margin-right: 10px;
    }
    .main-nav__item:last-of-type {
        margin-right: 0;
    }
    .main-nav__item::before {
        position: absolute;
        content: '';
        left: 50%;
        bottom: 0px;
        width: 0%;
        height: 3px;
        background-color: rgb(188, 118, 196);
        transition: width 0.3s;
        transform: translateX(-50%);
    }
    .main-nav__item:hover::before {
        width: 70%;
    }
    .nav-item__title {
        padding-top: 14px;
        padding-bottom: 10px;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        user-select: none;
        cursor: pointer;
    }

    @media (max-width: 900px) {
        .ex-header {
            position: fixed;
            top: 0;
            padding: 10px 0;
        }
        .inner-header__leftside {
            margin-right: 10px;
        }
        .header__logo {
            max-width: 45px;
        }
        .header__search {
            display: none;
        }
        .rightside__searchBtn {
            display: block;
        }
        .nav-header {
            display: none;
        }
    }
    @media (max-width: 600px) {
        .rightside__sign {
            color: inherit;
            border: none;
            line-height: 1;
            height: auto;
            padding: 0;
        }
        .rightside__sign > span {
            display: none;
        }
        .rightside__sign > .tab-icon {
            display: block;
        }
    }
`