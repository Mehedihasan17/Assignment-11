import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://pure-wave-99844.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='items-container pt-3'>
            <h1>Inventory Items</h1>
            <div className='items'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;