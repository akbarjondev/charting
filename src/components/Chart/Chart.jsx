import React, { useEffect, useState } from "react";
import API from './../../api/jsonplaceholder';
import './Chart.css';

const Chart = ({ user, onHover }) => {

  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Promise.all([getUserPosts(user.id), getUserAlbums(user.id), getUserTodos(user.id)])
    .then(response => {
      setPosts(response[0].data);
      setAlbums(response[1].data);
      setTodos(response[2].data);
    })
    .catch(reject => {
      console.error(reject);
    });
  }, []);

  function getUserPosts(userId) {
    return API.get(`/users/${userId}/posts`);
  }

  function getUserAlbums(userId) {
    return API.get(`/users/${userId}/albums`);
  }

  function getUserTodos(userId) {
    return API.get(`/users/${userId}/todos`);
  }

  function pointerHover(event) {
    onHover(event)

    const item = event.target;
    const itemHeight = event.target.clientHeight;

    item.style.height = `${itemHeight * 1.2}%`;
  }

  function pointerLeave(event) {
    const item = event.target;
    const itemHeight = event.target.clientHeight;

    item.style.height = `${itemHeight / 1.2}%`;
  }

  return (
    <div className="chart">
      <div className="chart__stat">
        <div 
          onMouseEnter={pointerHover}
          onMouseLeave={pointerLeave}
          className="posts chart__items" 
          style={{height: `${2 * posts.length}%`}}
          data-key='posts'
        >{posts.length}</div>
        <div 
          onMouseEnter={pointerHover}
          onMouseLeave={pointerLeave}
          className="todos chart__items" 
          style={{height: `${2 * todos.length}%`}}
          data-key='posts'
        >{todos.length}</div>
        <div 
          onMouseEnter={pointerHover}
          onMouseLeave={pointerLeave}
          className="albums chart__items" 
          style={{height: `${2 * albums.length}%`}}
          data-key='posts'
        >{albums.length}</div>
      </div>
      <div className="chart__label">
        <div className="chart__names">posts</div>
        <div className="chart__names">todos</div>
        <div className="chart__names">albums</div>
      </div>
      <div className="chart__username">{user.name}</div>
    </div>
  );
}

export default Chart;
