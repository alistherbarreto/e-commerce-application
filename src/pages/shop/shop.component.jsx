import React from 'react';
import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection : SHOP_DATA
        }
    }

    render () {
        const {collection} = this.state;
        return (
            <div className="shop-page">
                {
                    collection.map(({id,...otherCollectonProps}) => (
                        <CollectionPreview key={id} {...otherCollectonProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;