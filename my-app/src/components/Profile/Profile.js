import PropTypes from 'prop-types';
import s from './Profile.module.css';

const profileOptions = { name, tag, location, avatar, stats };

function Profile(profileOptions) {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avtar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>)

};

Profile.propTypes = {

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