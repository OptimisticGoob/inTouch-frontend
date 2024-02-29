import React from "react";

const TouchIcon: React.FC<{size: string}> = ({ size }) => {
    return (
        <svg width={size} height={size}>
          <path d={"./logoSpiral.svg"} />
        </svg>
      );

}

export default TouchIcon;