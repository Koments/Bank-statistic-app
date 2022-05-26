import styled from "@emotion/styled";

export const BrifingsStyles = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafcfe;
  border: 1px solid #f1f0f2;
  border-radius: 5px;
  padding: 1%;
  height: 144px;
  .brifings-title {
    width: 30%;
    border-right: 1px solid #eff1f4;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    flex-direction: column;
    padding: 5% 2%;
    div {
      font-size: 17px;
    }
    h2 {
      margin: 0;
    }
  }
  .brifing-bar {
    width: 70%;
    padding: 0 3%;
    height: 80%;
    display: flex;
    align-items: center;
  }
`;
