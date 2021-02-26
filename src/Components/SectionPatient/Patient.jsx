import React from 'react';
import './Patient.scss';

function Patient( {posts}) {

    return (
        <>
            {
                posts.map(post => (
                    <div className="patient d-flex flex-column  mr-3 mb-2 reset-padding col-md-5 col-lg-3 border" key={post.id}>
                        <div className="cajaOne bg-light w-100 border-bottom">
                            <div className="px-2 py-2">{post.name}</div>
                        </div>
                        
                        <div className="d-flex flex-row">
                            <div className="w-50 border-right">
                                info <br/>
                                info <br/>
                                info <br/>
                            </div>
                            <div>
                                caja 2
                            </div>
                        </div>

                        <div className="bg-light d-flex justify-content-around border-top details">
                            <div>
                                <i class="fas fa-file-download text-secondary"></i>
                            </div>
                            <div>
                                <i class="fas fa-info-circle text-secondary"></i>
                            </div>
                            <div>
                                <i class="fas fa-ellipsis-v text-secondary"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Patient;
