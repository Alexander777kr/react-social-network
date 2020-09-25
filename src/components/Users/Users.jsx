import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectPage}
              onClick={() => props.onPageChanged(p)}
            >
              {` ${p} `}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={!u.photos.small ? userPhoto : u.photos.small}
                  alt="Avatar"
                  className={s.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
