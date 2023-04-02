import React from 'react';
import './Collections.css';

class Collection extends React.Component {
    render() {
        const { name, text } = this.props;
        return (
            <div className='collection'>
                <h2 className='collection-name'> {name}</h2>
                <button class="collection-btn">Explore Collection</button>
                <div className='collection-text'>{text}</div>
            </div>
        );
    }
};

export default Collection;