import React, {useContext} from 'react';
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import Context from '../context'
import PropTypes from 'prop-types'

function Table(props) {
    const {splitUsers, setMonthes} = useContext(Context)

    if(props.users.length) {
        //users has already loaded

        setMonthes(splitUsers(props.monthes, props.users))
    }
    
    return (
        <div className="row">
            <TableHeader />
            <TableBody />
        </div>
    )
}

Table.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    monthes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table
