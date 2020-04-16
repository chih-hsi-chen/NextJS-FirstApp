import css from 'styled-jsx/css';

export default css`
.ex-footer {
    margin-top: 50px;
    padding: 64px 0;
    background-color: rgb(245, 245, 245);
}
.footer__links {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid #39393e;
}
@media (max-width: 900px) {
    .ex-footer {
        padding: 0;
    }
    .footer__links {
        display: none;
    }
}

.f-link {
    flex: 0 0 21%;
}
.f-link[name="follow"] {
    flex: 0 0 16%;
}
.f-link__title {
    font-size: 16px;
    font-weight: 700;
    color: #39393e;
    margin-bottom: 20px;
}
.f-link__list {
    font-size: 13px;
    list-style: none;
}
.f-link__item {
    margin-top: 8px;
}
.f-link__item > a {
    color: #39393e;
    text-decoration: none;
}
.f-link__item > a:active, .f-link__item > a:hover {
    text-decoration: underline;
}
.follow-link {
    display: flex;
    align-items: center;
}
.follow-link :global(.follow-link__icon) {
    margin-right: 10px;
    font-size: 1.5rem;
    max-width: 1.5rem;
}
/* Footer static */
.footer__static {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
}
@media (max-width: 900px) {
    .ex-footer {
        margin-top: 0;
        background-color: rgb(238, 238, 239);
    }
    .footer__static {
        flex-direction: column;
        align-items: flex-start;
        padding: 14px 24px;
    }
}
.static__logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.static__logo > a {
    display: block;
    margin-right: 12px;
}
.static__logo > a > img {
    width: 100px;
}
.static__slogan {
    color: #66666a;
    font-size: 13px;
}
.copyright {
    color: #66666a;
    font-size: 13px;
    font-weight: 500;
}
@media (max-width: 900px) {
    .static__logo {
        margin-bottom: 8px;
    }
}
`;