import PropTypes from 'prop-types';
import s from './Profile.module.css';

// const profileOptions = { avatar, name, tag, location, stats };

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p> {/*role="genral-font"*/}
        <p className={s.tag}>@{tag}</p> {/*role="genral-font"*/}
        <p className={s.location}>{location}</p> {/*role="genral-font"*/}
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности

// {
//     "name": "Jacques Gluke",
//         "tag": "jgluke",
//             "location": "Ocho Rios, Jamaica",
//                 "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//                     "stats": {
//         "followers": 5603,
//             "views": 4827,
//                 "likes": 1308
//     }
// }
