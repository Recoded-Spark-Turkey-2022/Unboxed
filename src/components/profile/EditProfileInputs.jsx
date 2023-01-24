import React from 'react';

const EditProfileInputs = ({styles,textContent,name,value,handleChange, validation}) => {
    
  return (
    <div className={styles.inputRows}>
      {' '}
      <p className={styles.inputLabel}>{textContent}</p>
      <input
        className={styles.inputs}
        type="text"
        name={name}
        required ={validation}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditProfileInputs;
