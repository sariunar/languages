import React from 'react';
import img from '../images/studystacklogo.svg'

class Collection extends React.Component {
    render() {
        const { name, text } = this.props;
        return (
            <div>
                <h2 className='collection-name'> {name}</h2>
                <button class="collection-btn">Explore Collection</button>
                <div className='collection-text'>{text}</div>
            </div>
        );
    }
};

export default Collection;