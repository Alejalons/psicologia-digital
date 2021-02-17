import React from 'react';
import './Patient.scss';

function Patient( {posts}) {

    return (
        <>
            {
                posts.map(post => (
                    <div className="patient" key={post.id}>
                        <p className="name">{post.name}</p>
                        <p className="parag">{post.species}</p>
                        <button className="detail" value="1">Detalle</button>
                    </div>
                ))
            }
        </>
    )
}

export default Patient;
