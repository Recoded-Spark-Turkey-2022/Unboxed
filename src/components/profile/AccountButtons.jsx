import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styles } from './ProfileStyle';
import { deleteCounselorHandler } from '../../features/user/userSlice';

const AccountButtons = ({ editInfo, handleEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = () => {
    navigate('/');
  };
  return (
    <div className="flex gap-6">
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
          dispatch(deleteCounselorHandler({ navigation }));
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
