import React from 'react';
import PropTypes from 'prop-types'
import HeaderItem from './HeaderItem'

function TableHeader({header, handleMouseEnter}) {

    return (
        <div className="row">
            {header.map((item, index) => (
                <HeaderItem
                    key={index}
                    name={item.name}
                    size={item.size}
                    index={index}
                    handleMouseEnter={handleMouseEnter} />
            ))}
        </div>
    )
}

TableHeader.propTypes = {
    header: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleMouseEnter: PropTypes.func.isRequired
}

export default TableHeader
