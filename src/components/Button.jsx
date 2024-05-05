const Button = ({ label, iconRight }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red'>
      {label}
      <img
        src={iconRight}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5'
      />
    </button>
  );
};

export default Button;