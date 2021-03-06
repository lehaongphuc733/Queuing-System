import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-radius: 12px;
  position: absolute;
  top: 210px;
  left: 220px;
  background-color: white;
  width: 1170px;
  height: 540px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  position: absolute;
  width: 210px;
  height: 36px;
  left: 44px;
  top: 15px;
  font-style: normal;
  font-weight: 650;
  font-size: 20px;
  line-height: 36px;
  color: #ff7506;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 40px;
  left: 40px;
`;

const ButtonForm = styled.div`
  width: 1200px;
  margin-top: 10px;
  display: flex;
  position: absolute;
  top: 540px;
  text-align: center;
`;
const ButtonCancel = styled.div`
  margin-left: 400px;

  & :hover {
    cursor: pointer;
  }
`;
const ButtonAdd = styled.div`
  margin-left: 30px;
  & :hover {
    cursor: pointer;
  }
`;

const BAdd = styled.button`
  background-color: #ff9138;
  border: none;
  color: #fffcfa;
  border-radius: 12px;
  width: 150px;
  height: 50px;

  & :hover {
    cursor: pointer;
  }
`;

const BCancel = styled.button`
  border-radius: 12px;
  border: 0.1px solid #ff9138;
  width: 150px;
  color: #ff9138;
  background-color: #fff2e7;
  height: 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Name = styled.p`
  font-size: 20px;
`;

const Span = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 510px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;
  pointer-events: none;
`;
const Inputs = styled.input`
  width: 1060px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;
  pointer-events: none;
`;

const Select = styled.select`
  width: 530px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;

  pointer-events: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Option = styled.option`
  color: #ff7506;
`;

const P = styled.p`
  color: #89888d;
`;

export const AddDeviceDT = () => {
  return (
    <Container>
      <Title>Th??ng tin thi???t b???</Title>
      <Row>
        <Column>
          <Name>
            M?? thi???t b???: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nh???p m?? thi???t b???"></Input>
        </Column>
        <Column>
          <Name>
            Lo???i thi???t b???: <Span>*</Span>
          </Name>
          <Select>
            <Option id="add-dv-op" selected>
              <P>Ch???n lo???i thi???t b???</P>
            </Option>
            <Option>Kiosk</Option>
            <Option>Display counter</Option>
          </Select>
          <ArrowDropDown
            style={{
              color: "orange",
              position: "absolute",
              top: "65px",
              left: "1030px",
              fontSize: "3rem",
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            T??n thi???t b???: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nh???p t??n thi???t b???"></Input>
        </Column>
        <Column>
          <Name>
            T??n ????ng nh???p: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nh???p t??i kho???n"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            ?????a ch??? IP: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nh???p m?? thi???t b???"></Input>
        </Column>
        <Column>
          <Name>
            M???t kh???u: <Span>*</Span>
          </Name>
          <Input type="password" placeholder="Nh???p m???t kh???u"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            D???ch v??? s??? d???ng: <Span>*</Span>
          </Name>
          <Inputs type="text" placeholder="Nh???p d???ch v??? s??? d???ng"></Inputs>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            <Span>*</Span> L?? tr?????ng th??ng tin b???t bu???c
          </Name>
        </Column>
      </Row>
      <ButtonForm className="dv-bcancel">
        <ButtonCancel>
          <Link to={"/device"}>
            <BCancel>H???y b???</BCancel>
          </Link>
        </ButtonCancel>
        <ButtonAdd>
          <Link to={"/device"}>
            <BAdd>Th??m thi???t b???</BAdd>
          </Link>
        </ButtonAdd>
      </ButtonForm>
    </Container>
  );
};
