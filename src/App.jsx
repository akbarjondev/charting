import { useEffect, useState } from 'react';
import './App.css';
import ChartList from './components/ChartList/ChartList';
import API from './api/jsonplaceholder'; 

function App() {
  const [users, setUsers] = useState([]);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    API.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(reject => {
        console.error(reject);
      })
  }, [])

  useEffect(() => {
    const allStat = []

    users.length && users.map(user => {
      Promise.all([getUserPosts(user.id), getUserAlbums(user.id), getUserTodos(user.id)])
        .then(response => {
          const posts = response[0].data;
          const albums = response[1].data;
          const todos = response[2].data;

          allStat.push({
            user,
            posts,
            albums,
            todos
          })
        })
        .catch(reject => {
          console.error(reject);
        });
    });

    setStat(allStat);

  }, [users]);

  function getUserPosts(userId) {
    return API.get(`/users/${userId}/posts`);
  }

  function getUserAlbums(userId) {
    return API.get(`/users/${userId}/albums`);
  }

  function getUserTodos(userId) {
    return API.get(`/users/${userId}/todos`);
  }

  return (
    <div className="ui container">
      <ChartList stat={stat} />
    </div>
  )
}

export default App
