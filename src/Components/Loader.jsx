import React from 'react'

const Loader = ({
    value
}) => (
    <div className='progress-wrapper'>
        <div className="progress">
        <div className="determinate" style={{width: `${value || 0}%`}}></div>
        </div>
    </div>
)

export default Loader