import styled from "@emotion/styled";
import Switch from "react-switch";
import Image from "next/image";
import { debounce } from "lodash";
import { axiosInstance, axiosTest } from "@baseURL";
import { useState, useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, deviceAtom, autoConfigAtom } from "@store/atoms";
import { formatAutoConfigSelector } from "@store/selector";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import optimal from "@data/optimalGrowingCondition";
import { colorCode } from "@store/constValue";

import ActuatorLogTable from "../elements/ActuatorLogTable";

const SubSection3Contents = () => {
  const [autoConfig, setAutoConfig] = useRecoilState(autoConfigAtom); //현재 디바이스의 자동제어상태(set용 아톰)
  const formatAutoConfig = useRecoilValue(formatAutoConfigSelector); //현재 디바이스의 자동제어상태(셀렉터)

  const [isValueMode, setIsValueMode] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [targetValue, setTargetValue] = useState(
    formatAutoConfigSelector.target_moisture || parseInt(optimal.moist)
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useRecoilValue(userAtom); //현재 로그인된 유저의 정보
  const device = useRecoilValue(deviceAtom); //현재 로그인된 유저의 device
  const { device_id } = device;
  const { id: user_id } = user;

  useEffect(() => {
    console.log(`자동제어상태 : ${formatAutoConfig.status}`);
    console.log(`현재 로그인 정보 : ${user_id} ${device_id}`);

    setTargetValue(formatAutoConfig.target_moisture);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoConfig]);

  //자동제어 토글버튼 onChange
  const handleAutoControlOnOff = () => {
    setAutoConfig((prev) => {
      return { ...prev, status: !autoConfig.status };
    });
  };

  useEffect(() => {
    if (isLoaded) {
      if (formatAutoConfig.status === false) {
        console.log("자동제어 모드를 종료합니다. 즉시제어 또는 자동제어 설정이 가능합니다.");
        const data = {
          status: 0,
          target_temp: null,
          target_moisture: null,
          target_light: null,
        };

        axiosInstance
          .post(`/auto/${device_id}`, data)
          .then((postRes) => {
            axiosInstance
              .get(`/auto/${device_id}/status`)
              .then((getRes) => {
                console.log(getRes);
                setAutoConfig(getRes.data[0]);
              })
              .catch((getError) => {
                console.error(getError);
              });
          })
          .catch((postError) => {
            console.error(postError);
          });
      } else if (formatAutoConfig.status === true) {
        console.log("자동제어 모드를 시작합니다.");
        const data = {
          status: 1,
          target_temp: parseInt(optimal.temp),
          target_moisture: targetValue || 1800,
          target_light: parseInt(optimal.light),
        };
        console.log("아래의 데이터로 자동제어 POST 합니다!");
        console.log(data);
        axiosInstance
          .post(`/auto/${device_id}`, data)
          .then((postRes) => {
            axiosInstance
              .get(`/auto/${device_id}/status`)
              .then((getRes) => {
                setAutoConfig(getRes.data[0]);
              })
              .catch((getError) => {
                console.error(getError);
              });
          })
          .catch((error) => {
            console.error(error);
            alert("서버와의 통신에 실패했습니다.");
            setTargetValue(formatAutoConfigSelector.target_moisture);
            setIsAutoControl((prev) => {
              return !prev;
            });
          });
      }
    } else {
      console.log("로딩중");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoConfig.status]);

  //자동제어 모드 라디오버튼 onChange
  const handleRadioChange = (e) => {
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
  const handlePost = async (e, cmd) => {
    if (isButtonDisabled) {
      alert("이전 명령이 처리중입니다.");
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);

    try {
      const postres = await axiosInstance.post(`/command/cmd/${device_id}`, {
        command: "1",
        actuator: "pump",
      });

      if (postres.status === 200) {
        setTimeout(async () => {
          await axiosInstance.post(`/command/cmd/${device_id}`, {
            command: "0",
            actuator: "pump",
          });
          alert("펌프를 2.5 초간 작동했습니다.");
        }, 2500);
      }
    } catch (err) {
      console.error(err);
      // alert("서버와의 통신에 실패했습니다.");
    }
  };
  //자동제어 POST (useEffect: isAutoControl)

  useEffect(() => {
    !isValueMode && setTargetValue(parseInt(optimal.moist));
  }, [isValueMode]);

  useEffect(() => {
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //--------------------------------------------------------------------//

  return (
    <Main>
      <GridContainer>
        <Item1>
          <TitleText>자동제어</TitleText>
          {formatAutoConfig.status ? (
            <>
              <MessageText>현재 자동제어가 동작하고 있습니다</MessageText>
              <br />

              <p>
                설정된 목표 토양수분 :
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: colorCode.lavender,
                    paddingLeft: "10px",
                  }}
                >
                  {formatAutoConfig.target_moisture}
                </span>
              </p>
              <p>
                자동제어 시작일자 :
                <span style={{ fontWeight: "700", paddingLeft: "10px" }}>
                  {formatAutoConfig.created_at}
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
                checked={formatAutoConfig.status ? true : false}
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
          {formatAutoConfig.status ? (
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
                          목표 토양수분<span>{targetValue ? targetValue : 1800}</span>
                        </SlideTitle>
                        <Slider
                          min={0}
                          max={2500}
                          step={100}
                          value={targetValue || 1800}
                          defaultValue={1800}
                          onChange={handleSlider}
                        />
                      </SliderWrapper>
                    </AutoModeSeletorWrapper>
                  ) : (
                    <AutoModeSeletorWrapper>
                      <AutoModeSeletorText>목표 토양수분 직접 설정하기</AutoModeSeletorText>
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
                        ...목표 토양수분 세팅완료!
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
          <SmallTitleText>즉시 제어 (펌프 2.5초간)</SmallTitleText>
          {formatAutoConfig.status ? (
            <DisabledManualControlBtn>
              <div>자동제어 동작 중에는 설정할 수 없습니다</div>
            </DisabledManualControlBtn>
          ) : (
            <ManualControlBtnWrapper>
              <ManualControlBtn onClick={(e) => handlePost(e)}>ON</ManualControlBtn>
            </ManualControlBtnWrapper>
          )}
        </Item3>
        <Item4>
          <SmallTitleText>제어 기록</SmallTitleText>
          <ActuatorLogTable category="pump"></ActuatorLogTable>
        </Item4>
      </GridContainer>
    </Main>
  );
};

export default SubSection3Contents;

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
  width: 100%;
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
    background-color: ${({ selected }) => (selected ? colorCode.marine : "#E4E4E4")};
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
