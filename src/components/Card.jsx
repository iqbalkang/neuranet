import React from 'react';

import { AiFillApple, AiOutlineApple } from 'react-icons/ai';

import Tag from './Tag';
import { AiOutlineEye } from 'react-icons/ai';

const commonIconClasses = 'h-auto w-6 text-gray-400';

const Card = ({ feature, big }) => {
  if (big) return <BigCard {...feature} />;
  else return <SmallCard {...feature} />;
};

export default Card;

export const BigCard = ({ title, description, img, tags, number, rating }) => {
  const renderTags = tags.map((tag, index) => {
    if (index === 0)
      return (
        <Tag key={index} bgTeal>
          {tag}
        </Tag>
      );
    else return <Tag key={index}>{tag}</Tag>;
  });

  const renderApple =
    rating > 0 ? (
      <AiFillApple className={commonIconClasses + ' text-yellowish'} />
    ) : (
      <AiOutlineApple className={commonIconClasses} />
    );

  return (
    <article className='w-full sm:basis-[48.5%] lg:basis-[32%] shrink-0 border border-pinkish rounded-2xl overflow-hidden relative text-sm'>
      <div className='flex items-center gap-1 absolute right-4 top-2'>
        <AiOutlineEye className={commonIconClasses} />
        <span>{number}</span>
      </div>
      <img src={img} alt='card-image' className='w-[65%] mx-auto lg:h-40 mb-4' />
      <div className='px-4 pb-4'>
        <div className='flex '>
          <div className='space-x-1'>{renderTags}</div>
          <div className='ml-auto flex items-center gap-1'>
            {renderApple}
            <span>{rating > 0 ? rating.toFixed(1) : rating}</span>
          </div>
        </div>
        <h3 className='text-xl font-bold capitalize my-2'>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export const SmallCard = ({ title, description, img, tags, number, rating }) => {
  const renderTags = tags.map((tag, index) => {
    if (index === 0)
      return (
        <Tag key={index} bgTeal>
          {tag}
        </Tag>
      );
    else return <Tag key={index}>{tag}</Tag>;
  });

  const renderApple =
    rating > 0 ? (
      <AiFillApple className={commonIconClasses + ' text-yellowish'} />
    ) : (
      <AiOutlineApple className={commonIconClasses} />
    );

  return (
    <article className='w-full sm:basis-[48.5%] lg:basis-[32%] shrink-0 border border-pinkish rounded-2xl overflow-hidden relative text-sm'>
      <img src={img} alt='card-image' className='w-[30%] p-4' />
      <div className='px-4 pb-4'>
        <div className='flex '>
          <div className='space-x-1'>{renderTags}</div>
        </div>
        <h3 className='text-xl font-bold capitalize my-2'>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
