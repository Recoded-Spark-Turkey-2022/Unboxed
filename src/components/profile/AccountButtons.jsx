import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styles } from './ProfileStyle';
import { deleteUserHandler } from '../../features/user/userSlice';

const AccountButtons = ({ editInfo, handleEdit, collection }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = () => {
    navigate('/');
  };
  return (
    <div className="flex gap-6 xsm:flex-wrap">
      <button
        className={styles.button}
        type="submit"
        onClick={
          editInfo.password === editInfo.confirmPassword ? handleEdit : null
        }
      >
        SAVE CHANGES
      </button>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(deleteUserHandler({ navigation, collection }));
        }}
        type="button"
      >
        DELETE ACCOUNT
      </button>
      <button
        className={styles.button}
        onClick={() => window.location.reload(false)}
        type="button"
      >
        CANCEL
      </button>
    </div>
  );
};

export default AccountButtons;
