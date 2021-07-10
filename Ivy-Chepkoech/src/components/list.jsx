import React from 'react';
import '../styles/list.css';

// component to add items on webpage

function List(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key} >
            <p>
                {item.text}
                <span> <button id="delete" onClick={() => props.deleteItem(item.key)}>-</button>
                </span></p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default List;