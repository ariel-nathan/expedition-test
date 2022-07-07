import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

const EndSVG = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle cx={6} cy={6} r={6} transform="rotate(-180 6 6)" fill="#000" />
      <Path
        d="m9 6-.53.53-2.095-2.095V9h-.75V4.435L3.53 6.53 3 6l3-3 3 3Z"
        fill="#F6C62D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(-180 6 6)" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EndSVG;
