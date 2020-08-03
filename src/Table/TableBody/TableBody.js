import React from 'react';
import PropTypes from 'prop-types'
import TableRow from './TableRow'

function TableBody({ month }) {
    return (
        <div className="users-wr">
            <div className="row heading">
                <div className="col col-1 ml-auto">
                    <p>#</p>
                </div>
                <div className="col col-2">
                    <p>First Name</p>
                </div>
                <div className="col col-2">
                    <p>Last Name</p>
                </div>
                <div className="col col-2 mr-auto">
                    <p>Date of Birth</p>
                </div>
            </div>
            {month.users.map((user, index) => {
                return (
                    <TableRow
                        firstName={user.firstName}
                        lastName={user.lastName}
                        dob={user.dob}
                        number={index + 1}
                        monthName={month.name}
                        key={index}
                    />
                )
            })}
            <p>To hide the list, click to the left or right of it</p>
        </div>
    )
}

TableBody.propTypes = {
    month: PropTypes.object.isRequired
}

export default TableBody