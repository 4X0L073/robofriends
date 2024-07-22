import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scrollable', borderRadius: '10px', border: '4px solid cyan', height: 'auto' }}>
                {props.children}
        </div>
    )
}

export default Scroll;
