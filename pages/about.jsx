import Link from 'next/link';
import style from './about.module.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <div className={style['about-header']}>關於 About Next 網頁</div>
                <div>
                    <Link href="/">
                        <button>回到首頁</button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default About;