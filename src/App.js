import React, {useState, useEffect} from 'react';
import Table from './Table/Table'
import Context from './context'
import splitUsers from './helpers/helper';
import axios from 'axios'

import state from './state'

function App() {

  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [monthes, setMonthes] = React.useState(state.monthes)

  function onUsersLoading() {
    setMonthes(splitUsers(monthes, users))
  }

  function displayDate(date) {
    return new Date(date).toString().split('').splice(8, 7).join('').replace(' ', '. ');
  }

  useEffect(() => {
    setLoading(true)
    axios({ method: 'GET', url: `${state.url}`})
      .then(res => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(err => {
        throw err
      })
  }, [setUsers])

  return (
    <Context.Provider value={{onUsersLoading, displayDate}}>
      <div>
        { loading ? <p>Loading...</p> :
           <Table monthes={monthes} />
        }
      </div>
    </Context.Provider>
  );
}

export default App;
