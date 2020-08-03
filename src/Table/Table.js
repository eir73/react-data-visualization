import React, {useContext, useState} from 'react';
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import Context from '../context'
import PropTypes from 'prop-types'

function Table({monthes}) {
    const {onUsersLoading} = useContext(Context)
    const [enteredMonth, setEnteredMonth] = React.useState({})

    onUsersLoading()

    const monthHeaders = monthes.map(month => {
        return {
            name: month.name,
            size: month.users.length
        }
    })   
        
    function showUsers(index) {
        setEnteredMonth(monthes[index])
    }

    function hideUsers() {
        setEnteredMonth({})
    }

    return (
        <div className="main-wr" onClick={hideUsers}>
            <TableHeader handleMouseEnter={showUsers} header={monthHeaders} />
            {enteredMonth.name ? 
                <TableBody month={enteredMonth} /> :
                <p>Hover your mouse over a month to view the list of people born that month.</p>
            }
        </div>
    )
}

Table.propTypes = {
    monthes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Table
