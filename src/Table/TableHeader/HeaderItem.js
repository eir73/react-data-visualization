import React from 'react';
import PropTypes from 'prop-types'

function HeaderItem({index, name, size, handleMouseEnter}) {
    const classes = ['month-wr']

    if (size <= 2) {
        classes.push('gray')
    } else if (size <= 6) {
        classes.push('blue')
    } else if (size <= 10) {
        classes.push('green')
    } else {
        classes.push('red')
    }

    return (
        <div className="col col-1" onMouseEnter={() => handleMouseEnter(index)}>
            <div className={classes.join(' ')}>
                <p>{name}</p>
            </div>
        </div>
    )
}

HeaderItem.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.number,
    handleMouseEnter: PropTypes.func
}

export default HeaderItem