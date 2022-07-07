import { Text } from "react-native";
import styled from "styled-components/native";

import StartSVG from "../SVG/StartSVG";
import EndSVG from "../SVG/EndSVG";

const DateInfo = ({ receiptData }: any) => {
  return (
    <>
      <DateContainer>
        <DateFromContainer>
          <DateHeader>
            <Text
              style={{
                fontFamily: "RubikSemiBold",
                fontSize: 10,
                color: "gray",
              }}
            >
              Start Date
            </Text>
            <StartSVG />
          </DateHeader>
          <Date>
            <Text
              style={{
                fontFamily: "RubikBold",
                fontSize: 19,
                textTransform: "uppercase",
              }}
            >
              {receiptData.startDate}
            </Text>
            <Text
              style={{
                fontFamily: "Rubik",
                fontSize: 13,
                textTransform: "uppercase",
              }}
            >
              {receiptData.startTime}
            </Text>
          </Date>
        </DateFromContainer>
        <DateDivider></DateDivider>
        <DateToContainer>
          <DateHeader>
            <Text
              style={{
                fontFamily: "RubikSemiBold",
                fontSize: 10,
                color: "gray",
              }}
            >
              End Date
            </Text>
            <EndSVG />
          </DateHeader>
          <Date>
            <Text
              style={{
                fontFamily: "RubikBold",
                fontSize: 19,
                textTransform: "uppercase",
              }}
            >
              {receiptData.endDate}
            </Text>
            <Text
              style={{
                fontFamily: "Rubik",
                fontSize: 13,
                textTransform: "uppercase",
              }}
            >
              {receiptData.endTime}
            </Text>
          </Date>
        </DateToContainer>
      </DateContainer>
    </>
  );
};

export default DateInfo;

const DateContainer = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ebeef1;
`;

const DateFromContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
`;

const DateDivider = styled.View`
  width: 1px;
  background-color: #ebeef1;
`;

const DateToContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;

const Date = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  flex: 1;
`;

const DateHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
