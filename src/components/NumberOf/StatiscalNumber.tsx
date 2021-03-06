import styled from "styled-components";
import {
  ArrowDropDown,
  Search,
  Add,
  ArrowLeft,
  ArrowRight,
  DateRange,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DatePick } from "../DatePick/DatePick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const WrapperSt = styled.div`
  display: flex;
  flex-direction: row;
`;

const Statiscals = styled.div`
  border-radius: 12px;
  position: absolute;
  top: 300px;
  left: 220px;
  border-radius: 12px;
  width: 1110px;
  height: 465px;
`;

const Table = styled.table`
  position: absolute;
  border-radius: 1em;
  overflow: hidden;
  top: -60px;
  left: -60px;
  width: 1300px;
  height: 580px;
  border-collapse: collapse;
  border-width: 1px;
  zoom: 95%;
  transform: scale(calc(8 / 9));
`;

const Tr = styled.tr`
  /* border-radius: 12px; */
`;

const Th = styled.th`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Td = styled.td`
  text-align: center;
`;

const RowIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconRed = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: red;
  background-color: red;
`;

const RowLabel = styled.label`
  margin-left: 14px;
  /* position: absolute;
  top: 70px; */
`;

const IconBlue = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: blue;
  background-color: blue;
`;
const IconGray = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: gray;
  background-color: gray;
`;

const FormAdd = styled.div`
  margin: auto;
  position: absolute;
  top: 275px;
  left: 1340px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
  background-color: #fff2e7;
  width: 80px;
  border: none;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const LabelAdd = styled.label`
  color: orange;
  font-size: 18px;
`;

const Block1 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 224px;
  top: 156px;
`;
const Block2 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 375px;
  top: 156px;
`;
const Block3 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 525px;
  top: 156px;
`;
const Block4 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 675px;
  top: 156px;
`;
const FormDate = styled.div`
  display: flex;
  gap: 5px;
  height: 42px;
  align-items: center;
  input {
    height: 20px;
    width: 125px;
    background: #ffffff;
    border: 1.5px solid #e4e4e6 !important;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }
`;
const Block5 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 156px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const FormSelect = styled.div`
  width: 140px;
`;

const Select = styled.select`
  font-size: 18px;
  width: 140px;

  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
`;

const Option = styled.option``;

const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border: 0.2px solid #e4e4e6;
  border-radius: 10px;
  padding: 12px;

  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
`;

const TabNext = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  position: absolute;
  top: 780px;
  left: 1100px;
  width: 230px;
  height: 30px;
  border-radius: 12px;
`;

const Number = styled.div`
  margin-top: 3.5px;
  width: 40px;
  height: 40px;
`;

const Pre = styled.div``;

const Dot = styled.div``;

const Next = styled.div``;

const Nlab = styled.div`
  color: #8a8993;
  justify-content: center;
  text-align: center;
  width: 20px;
  height: 20px;
`;
const Nlab3 = styled.div`
  margin-top: 5px;
  margin-right: 3px;
  color: #8a8993;
  text-align: center;
  width: 20px;
  height: 20px;
`;
const Nlab1 = styled.div`
  justify-content: center;
  text-align: center;
  color: white;
  width: 20px;
  height: 20px;
  background-color: #ff7506;
`;

export const StatiscalNumber = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          <P>T??n d???ch v???</P>
          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">T???t c???</Option>
              <Option className="dv-option">Kh??m s???n - Ph??? khoa</Option>
              <Option className="dv-option">Kh??m r??ng h??m m???t</Option>
              <Option className="dv-option">Kh??m tai m??i h???ng</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block1>
        <Block2>
          <P>T??nh tr???ng</P>

          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">T???t c???</Option>
              <Option className="dv-option">??ang ch???</Option>
              <Option className="dv-option">???? s??? d???ng</Option>
              <Option className="dv-option">B??? qua</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block2>
        <Block3>
          <P>Ngu???n c???p</P>

          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">T???t c???</Option>
              <Option className="dv-option">Kiosk</Option>
              <Option className="dv-option">H??? th???ng</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block3>
        <Block4>
          <P>Ch???n th???i gian</P>
          <FormDate>
            <DatePick></DatePick>
            <DateRange
              style={{ color: "#ff7506", position: "absolute", left: "115px" }}
            />
            <ArrowRight style={{ position: "absolute", left: "139px" }} />
            <DatePick></DatePick>
            <DateRange
              style={{ color: "#ff7506", position: "absolute", left: "265px" }}
            />
          </FormDate>
        </Block4>
        <Block5>
          <P>T??? kh??a</P>
          <Input type="text" placeholder="Nh???p t??? kh??a"></Input>
          <Search
            style={{
              color: "orange",
              position: "absolute",
              left: "240px",
              top: "67.5px",
            }}
          />
        </Block5>
      </Wrapper>
      <WrapperSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>STT</Th>
              <Th>T??n kh??ch h??ng</Th>
              <Th>T??n d???ch v???</Th>
              <Th>Th???i gian c???p</Th>
              <Th>H???n s??? d???ng</Th>
              <Th>Tr???ng th??i</Th>
              <Th>Ngu???n c???p</Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Td>2010001</Td>
              <Td>L?? Hu???nh ??i V??n</Td>
              <Td>Kh??m tim m???ch</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>??ang ch???</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010002</Td>
              <Td>Hu???nh ??i V??n</Td>
              <Td>Kh??m s???n - Ph??? khoa</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>???? s??? d???ng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010003</Td>
              <Td>L?? ??i V??n</Td>
              <Td>Kh??m r??ng h??m m???t</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>??ang ch???</RowLabel>
                </RowIcon>
              </Td>
              <Td>H??? th???ng</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010004</Td>
              <Td>Nguy???n ??i V??n</Td>
              <Td>Kh??m tai m??i h???ng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>??ang ch???</RowLabel>
                </RowIcon>
              </Td>
              <Td>H??? th???ng</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010005</Td>
              <Td>Tr???n Th??? ??i V??n</Td>
              <Td>Kh??m h?? h???p</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>??ang ch???</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010006</Td>
              <Td>L?? Hu???nh Ngh??a</Td>
              <Td>Kh??m t???ng qu??t</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>???? s??? d???ng</RowLabel>
                </RowIcon>
              </Td>
              <Td>H??? th???ng</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010007</Td>
              <Td>L?? Hu???nh ?????c</Td>
              <Td>Kh??m tai m??i h???ng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>???? s??? d???ng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010008</Td>
              <Td>Ph???m V??n M???nh</Td>
              <Td>Kh??m t???ng qu??t</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>B??? qua</RowLabel>
                </RowIcon>
              </Td>
              <Td>H??? th???ng</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010009</Td>
              <Td>L?? Th??? C???m Ti??n</Td>
              <Td>Kh??m tai m??i h???ng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>???? s??? d???ng</RowLabel>
                </RowIcon>
              </Td>
              <Td>H??? th???ng</Td>
              <Td>
                <Link to={"/detail-number"}>Chi ti???t</Link>
              </Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormAdd>
          <Link to={"/add-number"} className="db-fAdd">
            <ButtonAdd>
              <Add
                style={{
                  borderRadius: "25%",
                  backgroundColor: "#ff7506",
                  color: "#fff2e7",
                  marginLeft: "24px",
                  marginTop: "14px",
                }}
              />
              <LabelAdd>C???p s??? m???i</LabelAdd>
            </ButtonAdd>
          </Link>
        </FormAdd>
      </WrapperSt>
      <TabNext className="dv-tag">
        <Pre className="dv-tag-con">
          <Link to={"#"}>
            <ArrowLeft style={{ color: "#a9a9b0", fontSize: "30px" }} />
          </Link>
        </Pre>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab1>1</Nlab1>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>2</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>3</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>4</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>5</Nlab>
          </Link>
        </Number>
        <Dot>
          <Nlab3>...</Nlab3>
        </Dot>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>10</Nlab>
          </Link>
        </Number>
        <Next>
          <Link to={"#"}>
            <ArrowRight style={{ color: "#a9a9b0", fontSize: "30px" }} />
          </Link>
        </Next>
      </TabNext>
    </Container>
  );
};
