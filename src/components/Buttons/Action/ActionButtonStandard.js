import "./ActionButton.scss";

const ActionButtonStandard = ({ label, iconImg, handleClick, disabled, onClick, className }) => {
   return (
      <button
         className={"action-btn " + (disabled ? "disabled" : "") + (className && className)}
         onClick={handleClick || onClick}
      >
         {iconImg && (
            <img src={iconImg} alt="icon" aria-hidden="true" className="action-btn__icon" />
         )}
         <span className="action-btn__label">{label}</span>
      </button>
   );
};

export default ActionButtonStandard;
