import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
import propTypes from "prop-types";

export const GiftGrid = ({ category, onRemoveCategory }) => {
  const { images, isLoading } = useFetchGifts(category);
  return (
    <div className='flex flex-col gap-2 mt-4 mb-10'>
      <div className='flex justify-between items-center '>
        <h1 className='text-lg font-bold italic tracking-wide'>{category}</h1>
        <button
          onClick={() => onRemoveCategory(category)}
          className='btn btn-ghost btn-circle'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
        {isLoading && <div className='skeleton h-32 w-32'></div>}
        {images.length > 0 ? (
          images.map((image) => <GiftItem key={image.id} {...image} />)
        ) : (
          <h1>We couldnt find images</h1>
        )}
      </div>
    </div>
  );
};

GiftGrid.propTypes = {
  category: propTypes.string.isRequired,
  onRemoveCategory: propTypes.func.isRequired,
};
