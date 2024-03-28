import { Button } from 'antd';
import React from 'react';

const ListPage = ({listmap, removebtn, editbtn}) => {
    return (
        <>
        {listmap.map((list, index) => 
        <p key={index}>
            {list}
            <Button onClick={() => editbtn(index)}>Edit</Button>
            <Button onClick={() => removebtn(index)}>Delete</Button>
        </p>
        )}
        </>
    );
};

export default ListPage;