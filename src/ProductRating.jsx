import PropTypes from 'prop-types';
const defaultStyles = {
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  display: "block",
  float: "left",
};
const ProductRating = () => {

const {
  index,
  active,
  config,
  onMouseOver,
  onMouseLeave,
  onClick,
  halfStarHidden,
  halfStarAt,
  isUsingIcons,
  uniqueness
} = PropTypes;

const {
  color,
  activeColor,
  size,
  char,
  isHalf,
  edit,
  halfIcon,
  emptyIcon,
  filledIcon,
} = config;

let starClass = '';
let half = false;

if (isHalf && !halfStarHidden && halfStarAt === index) {
  if (!isUsingIcons) starClass = `react-stars-${uniqueness}`;
  else starClass = 'react-stars-half';
  half = true;
}

const style = Object.assign({}, defaultStyles, {
  color: active ? activeColor : color,
  cursor: edit ? 'pointer' : 'default',
  fontSize: `${size}px`
});
function renderIcon() {
  if (!isUsingIcons) {
      return char;
  }
  else {
      if (active) {
          return filledIcon;
      }
      else if (!active && half) {
          return halfIcon;
      }
      else {
          return emptyIcon;
      }
  }
}
  return (
    <div className="star-rating">
     <span
        className={starClass}
        style={style}
        key={index}
        data-index={index}
        data-forhalf={filledIcon ? index : char}
        onMouseOver={onMouseOver}
        onMouseMove={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick} >
        {renderIcon()}
    </span>
    </div>
  );
};

export default ProductRating;
