import styled from "styled-components";
import { Link } from "react-router-dom";
import { Computer, QuestionAnswer, ViewStream } from "@material-ui/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// const percentage = 90;

const Container = styled.div`
  position: absolute;
  width: 401px;
  height: 810px;
  left: 1039px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(219, 219, 219, 0.5);
  border-radius: 8px 16px 16px 8px;
`;

const Span = styled.span`
  position: absolute;
  height: 36px;
  left: 24px;
  top: 104px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff7506;
`;

const Devices = styled.div`
  position: absolute;
  width: 353px;
  height: 83px;
  left: 24px;
  top: 156px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

const Services = styled.div`
  position: absolute;
  width: 353px;
  height: 83px;
  left: 24px;
  top: 251px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

const NumberOf = styled.div`
  position: absolute;
  width: 353px;
  height: 83px;
  left: 24px;
  top: 346px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

const FormCalendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 353px;
  height: 336px;
  left: 24px;
  top: 445px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

const EqualOrange = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 16px;
  top: 11px;
`;

const Content1 = styled.div`
  position: absolute;
  width: 67px;
  height: 54px;
  left: 88px;
  top: 14px;
`;

const CircleOut = styled.div``;

const CircleIn = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 5px;
  top: 5px;
`;

const P = styled.p``;

const Icon = styled.div``;

export const VerticalNavRight = () => {
  return (
    <Container>
      <Span>Tổng quan</Span>
      <Devices>
        <Link to={"#"} style={{ textDecoration: "none" }}>
          <EqualOrange>
            <CircleOut>
              <CircularProgressbar
                value={90}
                text={`${90}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  text: { fill: "#535261" },
                  path: {
                    // path color
                    stroke: "#FF7506",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleOut>
            <CircleIn>
              <CircularProgressbar
                value={10}
                // text={`${1}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  path: {
                    // path color
                    stroke: "#7E7D88",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleIn>
          </EqualOrange>
          <Content1 className="db-content1">
            <P className="number">4.221</P>
            <Icon className="db-icon-navright">
              <Computer className="icon-navR ic_com" />
            </Icon>
            <P className="name device">Thiết bị</P>
          </Content1>
        </Link>
      </Devices>
      <Services>
        <Link to={"#"}>
          <EqualOrange>
            <CircleOut>
              <CircularProgressbar
                value={76}
                text={`${76}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  text: { fill: "#535261" },
                  path: {
                    // path color
                    stroke: "#4277FF",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleOut>
            <CircleIn>
              <CircularProgressbar
                value={24}
                // text={`${10}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  path: {
                    // path color
                    stroke: "#7E7D88",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleIn>
          </EqualOrange>
          <Content1 className="db-content1">
            <P className="number">276</P>
            <Icon className="db-icon-navright">
              <QuestionAnswer className="icon-navR ic_dv" />
            </Icon>
            <P className="name service">Dịch vụ</P>
          </Content1>
        </Link>
      </Services>
      <NumberOf>
        <Link to={"#"}>
          <EqualOrange>
            <CircleOut>
              <CircularProgressbar
                value={86}
                text={`${86}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  text: { fill: "#535261" },
                  path: {
                    // path color
                    stroke: "#35C75A",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleOut>
            <CircleIn>
              <CircularProgressbar
                value={17}
                // text={`${10}%`}
                strokeWidth={5}
                styles={{
                  root: {},
                  path: {
                    // path color
                    stroke: "#7E7D88",
                  },
                  trail: {
                    //trail color
                    stroke: "#EAEAEC",
                  },
                }}
              />
              ;
            </CircleIn>
          </EqualOrange>
          <Content1 className="db-content1">
            <P className="number">4.221</P>
            <Icon className="db-icon-navright">
              <ViewStream className="icon-navR ic_number" />
            </Icon>
            <P className="name numberof">Cấp số</P>
          </Content1>
        </Link>
      </NumberOf>
      <FormCalendar></FormCalendar>
    </Container>
  );
};