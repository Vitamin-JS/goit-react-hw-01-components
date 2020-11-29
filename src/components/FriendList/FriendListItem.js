import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendLisItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendLisItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendLisItem;

// {
//     "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
// }
