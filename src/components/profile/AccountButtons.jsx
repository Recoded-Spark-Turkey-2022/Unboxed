import React from 'react';
import {styles} from './ProfileStyle' 

const AccountButtons = ({editInfo,handleEdit}) => {
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
      <button className={styles.button} type="button">
        DELETE ACCOUNT
      </button>
      <button className={styles.button} type="button">
        CANCEL
      </button>
    </div>
  );
};

export default AccountButtons;
