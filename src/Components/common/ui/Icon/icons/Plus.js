import React from "react";

import { Svg } from "Components/common/ui";

function PlusIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </Svg>
  );
}

PlusIcon.defaultProps = {
  children: null,
  viewBox: "0 0 24 24",
};

export default PlusIcon;
