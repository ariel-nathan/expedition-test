import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ParkingIconSVG = (props) => (
  <Svg
    width={34}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.272 21.243a6 6 0 0 1 0-8.486l8.485-8.485a6 6 0 0 1 8.486 0l8.485 8.485a6 6 0 0 1 0 8.486l-12.02 12.02a1 1 0 0 1-1.415 0l-12.02-12.02Z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 24a1 1 0 0 1 1 1v12.977a1 1 0 1 1-2 0V25a1 1 0 0 1 1-1Z"
      fill="#000"
    />
    <Path
      d="M13.012 22h2.148c.3 0 .468-.144.492-.456l.168-1.896h3.276c2.292 0 3.708-1.284 3.708-3.372 0-1.62-1.068-2.676-3.18-2.676h-5.928c-.3 0-.468.144-.492.456l-.648 7.44c-.024.312.144.504.456.504ZM16 17.644l.156-1.8h2.52c.54 0 .912.252.912.792 0 .624-.396 1.008-1.068 1.008H16Z"
      fill="#F6C62D"
    />
  </Svg>
);

export default ParkingIconSVG;
