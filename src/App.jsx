import { useEffect, useState } from 'react';
import './App.css';
import ChartList from './components/ChartList/ChartList';
import API from './api/jsonplaceholder'; 

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    API.get('users')
    .then(response => {
      setUsers(response.data)
    })
  }, [])
  
  return (
    <div className="ui container">
    <ChartList users={users} />
    </div>
    )
  }
  
  export default App
  