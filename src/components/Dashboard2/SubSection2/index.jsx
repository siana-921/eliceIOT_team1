import styled from "@emotion/styled";
import Switch from "react-switch";
import Image from "next/image";
import { debounce } from "lodash";
import { axiosInstance, axiosTest } from "@baseURL";
import { useState, useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userInfoAtom, deviceInfoAtom, autoControlConfigOriginAtom } from "@store/atoms";
import { autoControlConfigSeletor } from "@store/selector";
import Slider, { Range, handleRender } from "rc-slider";
import "rc-slider/assets/index.css";
import optimal from "@data/optimalGrowingCondition";

import ActuatorLogTable from "../elements/ActuatorLogTable";

const SubSection2Contents = () => {
  const [autoControlConfigOrigin, setAutoControlConfigOrigin] = useRecoilState(
    autoControlConfigOriginAtom
  ); //현재 디바이스의 자동제어상태(set용 아톰)
  const autoControlConfig = useRecoilValue(autoControlConfigSeletor); //현재 디바이스의 자동제어상태(셀렉터)
  const [isValueMode, setIsValueMode] = useState(true);
  const [isAutoControl, setIsAutoControl] = useState(autoControlConfig.status);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [targetValue, setTargetValue] = useState(autoControlConfig.target_light || 50);

  const user = useRecoilValue(userInfoAtom); //현재 로그인된 유저의 정보 : default user001
  const device = useRecoilValue(deviceInfoAtom); //현재 로그인된 유저의 device : default unit001
  const { id: device_id } = device;
  const { id: user_id } = user;

  useEffect(() => {
    console.log(`자동제어상태 : ${isAutoControl}`);
    console.log(`현재 로그인 정보 : ${(user_id, device_id)}`);
    console.log(autoControlConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTargetValue(autoControlConfig.target_light);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //자동제어 토글버튼 onChange
  const handleAutoControlOnOff = () => {
    setIsAutoControl((prevIsAutoControl) => !prevIsAutoControl);
  };

  useEffect(() => {
    if (isAutoControl === false) {
      console.log("자동제어 모드를 종료합니다. 즉시제어 또는 자동제어 설정이 가능합니다.");
      const data = {
        status: 0,
        target_temp: null,
        target_moisture: null,
        target_light: null,
      };
      console.log("status 0 상태로 POST");
      axiosInstance
        .post(`/auto/${device_id}`, data)
        .then((postRes) => {
          console.log(postRes);
          axiosInstance
            .get(`/auto/${device_id}/status`)
            .then((getRes) => {
              console.log(getRes);
              setAutoControlConfigOrigin(getRes.data);
            })
            .catch((getError) => {
              console.error(getError);
            });
        })
        .catch((postError) => {
          console.error(postError);
        });
    } else if (isAutoControl === true && autoControlConfig.target_light !== targetValue) {
      console.log("자동제어 모드를 시작합니다.");
      const data = {
        status: 1,
        target_temp: parseInt(optimal.temp),
        target_moisture: parseInt(optimal.moist),
        target_light: targetValue,
      };
      console.log("아래의 데이터로 자동제어 POST 합니다!");
      console.log(data);
      axiosInstance
        .post(`/auto/${device_id}`, data)
        .then((postRes) => {
          console.log(postRes);
          axiosInstance
            .get(`/auto/${device_id}/status`)
            .then((getRes) => {
              console.log(getRes);
              setAutoControlConfigOrigin(getRes.data);
            })
            .catch((getError) => {
              console.error(getError);
            });
        })
        .catch((error) => {
          console.error(error);
          alert("서버와의 통신에 실패했습니다.");
          setTargetValue(autoControlConfig.target_light);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoControl]);
  //자동제어 모드 라디오버튼 onChange
  const handleRadioChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "setValueMode") {
      setIsValueMode(true);
    } else if (e.target.id === "setAlphaGoMode") {
      setIsValueMode(false);
    }
  };

  //슬라이더 value onChange handler
  const handleSlider = debounce(async (value) => {
    setTargetValue(value);
  }, 300);

  //수동제어 POST (onClick handler)
  const handlePost = async (e, target) => {
    if (isButtonDisabled) {
      alert("이전 명령이 처리중입니다.");
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 20000);
    const data = { command: target, actuator: "led" }; //command: 0 or 1
    try {
      const postres = await axiosInstance.post(`/cmd/${device_id}`, data);
    } catch (err) {
      console.error(err);
      alert("서버와의 통신에 실패했습니다.");
    }
  };
  //자동제어 POST (useEffect: isAutoControl)

  //--------------------------------------------------------------------//

  return (
    <Main>
      <GridContainer>
        <Item1>
          <TitleText>자동제어</TitleText>
          {isAutoControl ? (
            <>
              <MessageText>현재 자동제어가 동작하고 있습니다</MessageText>
              <br />

              <p>
                설정된 목표 조도 :
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#8884d8",
                    paddingLeft: "10px",
                  }}
                >
                  {targetValue}%
                </span>
              </p>
              <p>
                자동제어 시작일자 :
                <span style={{ fontWeight: "700", paddingLeft: "10px" }}>
                  {autoControlConfig.created_at}
                </span>
              </p>
            </>
          ) : (
            <>
              <MessageText>자동제어가 동작 중이 아닙니다</MessageText>
              <br />
              <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                수동제어 또는 자동제어 설정이 가능합니다
              </p>
              <p>자동제어 설정 후 자동제어 버튼을 토글해주시면 자동제어를 시작합니다!</p>
            </>
          )}
          <RadioInput
            type="radio"
            name="autoContolSet"
            id="setValueMode"
            checked={isValueMode}
            onChange={handleRadioChange}
          ></RadioInput>
          <RadioInput
            type="radio"
            name="autoContolSet"
            id="setAlphaGoMode"
            checked={!isValueMode}
            onChange={handleRadioChange}
          ></RadioInput>
          <ToggleButton>
            <label>
              <Switch
                onChange={handleAutoControlOnOff}
                checked={isAutoControl}
                onColor="#00b7d8"
                offColor="#B8B8B8"
                checkedIcon={false}
                uncheckedIcon={false}
              ></Switch>
            </label>
          </ToggleButton>
        </Item1>
        <Item2>
          <TitleText>자동제어 설정</TitleText>
          {isAutoControl ? (
            <RadioWrapper>
              <StyledRadio id="valueBasedControl" className="autoControlOn">
                <div>자동제어 동작 중에는 설정할 수 없습니다</div>
              </StyledRadio>
              <StyledRadio id="timeBasedControl" className="autoControlOn">
                <div>자동제어 동작 중에는 설정할 수 없습니다</div>
              </StyledRadio>
            </RadioWrapper>
          ) : (
            <RadioWrapper>
              <StyledRadio id="valueBasedControl" className="autoControlOff" selected={isValueMode}>
                <RadioLabel htmlFor="setValueMode">
                  {isValueMode ? (
                    <AutoModeSeletorWrapper>
                      <SliderWrapper>
                        <SlideTitle>
                          목표 제어 조도<span>{targetValue ? targetValue : 0}%</span>
                        </SlideTitle>
                        <Slider min={0} max={100} value={targetValue} onChange={handleSlider} />
                      </SliderWrapper>
                    </AutoModeSeletorWrapper>
                  ) : (
                    <AutoModeSeletorWrapper>
                      <AutoModeSeletorText>목표 조도 직접 설정하기</AutoModeSeletorText>
                    </AutoModeSeletorWrapper>
                  )}
                </RadioLabel>
              </StyledRadio>
              <StyledRadio id="timeBasedControl" className="autoControlOff" selected={!isValueMode}>
                <RadioLabel htmlFor="setAlphaGoMode">
                  {isValueMode ? (
                    <AutoModeSeletorWrapper>
                      <AutoModeSeletorText>최적 수치로 제어하기</AutoModeSeletorText>
                    </AutoModeSeletorWrapper>
                  ) : (
                    <AutoModeSeletorWrapper>
                      <AutoModeSeletorText
                        style={{ color: "black", fontWeight: "100", fontSize: "2.5rem" }}
                      >
                        ...목표 조도 세팅완료!
                      </AutoModeSeletorText>
                      <div style={{ position: "absolute", right: 0, opacity: "30%" }}>
                        <Image src="/images/alphago.png" alt="alphago" width={200} height={200} />
                      </div>
                    </AutoModeSeletorWrapper>
                  )}
                </RadioLabel>
              </StyledRadio>
            </RadioWrapper>
          )}
        </Item2>
        <Item3>
          <SmallTitleText>즉시 제어 (LED)</SmallTitleText>
          {isAutoControl ? (
            <DisabledManualControlBtn>
              <div>자동제어 동작 중에는 설정할 수 없습니다</div>
            </DisabledManualControlBtn>
          ) : (
            <ManualControlBtnWrapper>
              <ManualControlBtn onClick={(e) => handlePost(e, 1)}>ON</ManualControlBtn>
              <ManualControlBtn onClick={(e) => handlePost(e, 0)}>OFF</ManualControlBtn>
            </ManualControlBtnWrapper>
          )}
        </Item3>
        <Item4>
          <SmallTitleText>제어 기록</SmallTitleText>
          <ActuatorLogTable></ActuatorLogTable>
        </Item4>
      </GridContainer>
    </Main>
  );
};

export default SubSection2Contents;

const Main = styled.div`
  width: 75vw;
  height: 100vh;
  position: relative;
  padding: 20px 20px 20px 0;
`;

//---------------그리드-----------------//
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  > * {
    border: solid 0px #000;
    padding: 1.2vw;
  }
`;
const Item1 = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  position: relative;
`;
const Item2 = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 7;
  display: flex;
  flex-direction: column;
`;
const Item3 = styled.div`
  grid-column: 4 / 6;
  grid-row: 1 / 3;
`;
const Item4 = styled.div`
  grid-column: 4 / 6;
  grid-row: 3 / 7;
`;
//--------------------------------------//

//---------------텍스트-----------------//
const TitleText = styled.div`
  font-size: 3vw;
  font-weight: 700;
`;
const SmallTitleText = styled.h2`
  font-size: 2vw;
`;
const MessageText = styled.p`
  font-size: 2vw;
  padding-bottom: 3px;
`;
const AutoModeSeletorText = styled.p``;
const SlideTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
`;
//--------------------------------------//

//---------------Wrapper-----------------//
const RadioWrapper = styled.label`
  flex: 1;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;
const ManualControlBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 78%;
  margin-top: 2%;
  border-radius: 20px;
  overflow: hidden;
`;
const AutoModeSeletorWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: grey;
  font-weight: 100;
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding: 10%;
  color: black;
`;
//----------------------------------------//

//---------------동작요소-----------------//
const ToggleButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2vw;
  border: none;
  font-size: 1rem;
  background-color: transparent;
`;
const ManualControlBtn = styled.button`
  width: 50%;
  border-radius: 0;
  border: none;
  font-size: 3rem;
  font-weight: 700;
  background-color: #e4e4e4;
  &:hover {
    background-color: #8884d8;
    color: #fff;
  }
`;
const StyledRadio = styled.div`
  width: 100%;
  height: 48%;
  border-radius: 20px;
  background-color: #e4e4e4;
  border: 2px solid #dcdcdc;
  &.autoControlOff:hover {
    background-color: #8884d8;
    color: white;
  }
  &.autoControlOff {
    background-color: ${({ selected }) => (selected ? "#FFCD00" : "#E4E4E4")};
    border: none;
  }
  &.autoControlOn {
    > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
//--------------------------------------//

const RadioInput = styled.input`
  display: none;
`;
const RadioLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const DisabledManualControlBtn = styled.div`
  width: 100%;
  height: 100%;
  height: 78%;
  margin-top: 2%;
  background-color: #e4e4e4;
  border-radius: 20px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
