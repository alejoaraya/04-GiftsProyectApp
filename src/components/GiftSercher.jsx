import propTypes from "prop-types";
import { useState } from "react";

export const GiftSercher = ({ onAddCategory }) => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    onAddCategory(value.trim());
    setValue("");
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className='join w-full flex justify-center'>
      <input
        onChange={onChange}
        value={value}
        type='text'
        className='input join-item w-full sm:w-96'
        placeholder='Category name'
      />
      <button type='submit' className='btn join-item btn-primary'>
        search
      </button>
    </form>
  );
};

GiftSercher.propTypes = {
  onAddCategory: propTypes.func.isRequired,
};
