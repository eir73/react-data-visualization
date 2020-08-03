import React, {useState, useEffect} from 'react';
import Table from './Table/Table'
import Context from './context'
import splitUsers from './helpers/helper';
import axios from 'axios'

import state from './state'

function App() {

  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [monthes, setMonthes] = React.useState(state.monthes)

  useEffect(() => {

    setLoading(true)
    axios({ method: 'GET', url: `${state.url}`})
      .then(res => {
        setUsers(res.data)
        setLoading(false)
      })
  }, [setUsers])

  return (
    <Context.Provider value={{splitUsers, setMonthes}}>
      <div className="App">
        <Table users={users} monthes={monthes}/>
      </div>
    </Context.Provider>
  );
}

export default App;
