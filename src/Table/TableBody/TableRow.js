import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Context from '../../context'


function TableRow({ firstName, lastName, dob, number, monthName }) {
    const {displayDate} = React.useContext(Context)

    return (
        <div className="row user">
            <div className="col col-1 ml-auto">
                <p>{number}</p>
            </div>
            <div className="col col-2">
                <p>{firstName}</p>
            </div>
            <div className="col col-2">
                <p>{lastName}</p>
            </div>
            <div className="col col-2 mr-auto">
                <p>{monthName + ' ' + displayDate(dob)}</p>
            </div>
        </div>
    )
}

TableRow.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired
}

export default TableRow