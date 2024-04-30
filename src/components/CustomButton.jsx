const CustomButton = ({ children, onClick }) => {
  return (
    <div>
      <button
        className="mx-3 bg-black h-10 text-white w-44 rounded-lg"
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
