import React from "react";

const ContentWrapper = ({ secondary, rightBottomRounded, children }) => {
  return (
    <div
      className={`${
        secondary && rightBottomRounded ? 
        'c-content-wrapper c-content-wrapper--bottom-right-rounded c-content-wrapper--bg-secondary '
        :
        rightBottomRounded
          ? "c-content-wrapper c-content-wrapper--bottom-right-rounded"
          : secondary
          ? "c-content-wrapper c-content-wrapper--bg-secondary"
          : "c-content-wrapper"
      }`}
    >
      <div className='c-content-wrapper__content'>{children}</div>
    </div>
  );
};

export default ContentWrapper;
