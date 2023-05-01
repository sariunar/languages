import React from 'react';
import './Header.css';
import '../App/App.css';
import logo from '../../images/studystacklogo.svg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Collection from '../Collections/Collections';
import Carousel from "../Slider/Slider";
import Table from '../Table/Table';
import Error from '../ErrorPage/Error';

let collections = [
    {
        "id": 1,
        "name": "Collection 1",
        "text": ""
    }, {
        "id": 2,
        "name": "Collection 2",
        "text": ""
    }, {
        "id": 3,
        "name": "Collection 3",
        "text": ""
    }, {
        "id": 4,
        "name": "Collection 4",
        "text": ""
    }, {
        "id": 5,
        "name": "Collection 5",
        "text": ""
    }, {
        "id": 6,
        "name": "Collection 6",
        "text": ""
    }, {
        "id": 7,
        "name": "Collection 7",
        "text": ""
    }, {
        "id": 8,
        "name": "Collection 8",
        "text": ""
    }];

const Header = () => {
    return (
        <Router>
            <div>
                <header className="header">
                    <Link to="">
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>

                    <h1 className="header__title"> English Vocabulary Cards</h1>
                    <nav className="header__menu">
                        <ul>
                            <li className="header__menu-link">
                                <Link to="" className='header__menu-link_a'>Home</Link>
                            </li>
                            <li className="header__menu-slash"> / </li>
                            <li className="header__menu-link">
                                <Link to="/game" className='header__menu-link_a'>Game</Link>
                            </li>
                            <li className="header__menu-slash"> / </li>
                            <li className="header__menu-link">
                                <Link to="/collection" className='header__menu-link_a'>Collection</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/collection" element={<CollectionCard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
};
function Home() {
    return <div>
        <Table />
    </div>;
}

function Game() {
    return <div className='carousel'>
        <Carousel />
    </div>;
}

function CollectionCard() {
    return <div className="AppCollection">
        {
            collections.map((collection) =>
                <Collection key={collection.id} name={collection.name} text={collection.text} />
            )
        }
    </div>;
}

function ErrorPage() {
    return <Error />;
}
export default Header;