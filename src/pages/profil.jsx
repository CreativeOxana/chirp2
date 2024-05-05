import { render } from '@czechitas/render';
import '../global.css';
import './profil.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('user');

const userResponse = await fetch('http://localhost:4000/api/users');

const data = await userResponse.json();
const user = data.data[id];

document.querySelector('#root').innerHTML = render(
  <div>
    <h1>{user.name}</h1>
    <div>@{user.handle}</div>
    <img
      className="post__avatar"
      src={`http://localhost:4000${user.avatar}`}
      alt="fotografie uživatele"
    />

    <p>{user.bio}</p>
  </div>,
);
