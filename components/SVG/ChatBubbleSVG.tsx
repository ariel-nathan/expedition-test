import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChatBubbleSVG = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 0a9 9 0 0 0-9 9v6c0 1.545.39 3 1.075 4.27L.058 22.959a.8.8 0 0 0 .984.983l3.688-1.017A8.96 8.96 0 0 0 9 24h6a9 9 0 0 0 9-9V9a9 9 0 0 0-9-9H9Z"
      fill="#000"
    />
  </Svg>
);

export default ChatBubbleSVG;
