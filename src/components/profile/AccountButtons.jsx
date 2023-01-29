import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styles } from './ProfileStyle';
import { deleteUserHandler } from '../../features/user/userSlice';

const AccountButtons = ({ editInfo, handleEdit, collection }) => {
  const { t } = useTranslation();
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
        {t('SAVE CHANGES')}
      </button>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(deleteUserHandler({ navigation, collection }));
        }}
        type="button"
      >
        {t('DELETE ACCOUNT')}
      </button>
      <button
        className={styles.button}
        onClick={() => window.location.reload(false)}
        type="button"
      >
        {t('CANCEL')}
      </button>
    </div>
  );
};

export default AccountButtons;
