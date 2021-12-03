import * as React from "react";

const SvgComponent = (props) => (
  <svg height="20" viewBox="-40 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="M271 512H80c-44.113 0-80-35.887-80-80V161c0-44.113 35.887-80 80-80h191c44.113 0 80 35.887 80 80v271c0 44.113-35.887 80-80 80zM80 121c-22.055 0-40 17.945-40 40v271c0 22.055 17.945 40 40 40h191c22.055 0 40-17.945 40-40V161c0-22.055-17.945-40-40-40zm351 261V80c0-44.113-35.887-80-80-80H129c-11.047 0-20 8.953-20 20s8.953 20 20 20h222c22.055 0 40 17.945 40 40v302c0 11.047 8.953 20 20 20s20-8.953 20-20zm0 0"
    />
  </svg>
);

export default SvgComponent;
