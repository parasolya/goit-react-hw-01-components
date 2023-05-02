import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
import { clsx } from 'clsx';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <li className={css.item}>
        <span className={clsx(css[isOnline])}></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p >{name}</p>
      </li>
    </>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.symbol.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
