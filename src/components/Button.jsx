const CustomButton = ({ name, isBeam = false, containerClass }) => {
  return (
    <button
    aria-label="Submit Form"
    className={`btn cursor-pointer ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default CustomButton;
