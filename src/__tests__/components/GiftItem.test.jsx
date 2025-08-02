import propTypes from "prop-types";

export const GiftItem = ({ title, url }) => {
  return (
    <div className='card bg-base-100 w-full shadow-lg border-primary border-2'>
      <figure>
        <img src={url} alt='Shoes' className='w-full object-fill' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
      </div>
    </div>
  );
};

GiftItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
