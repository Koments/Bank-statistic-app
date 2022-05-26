import styled from "@emotion/styled";

export const MenuStyles = styled.div`
  border-bottom: 1px solid #eeeff2;
  .header-section {
    flex-direction: inherit;
    padding: 0 7% ;
    color: #808aa1;
    background-color: #fff;
    border: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 43px;
    font-size: 14px;
    &:hover {
      background-color: #fafbfc;
    }
  }
  .icon-container {
    display: flex;
  }
  .section-title {
    width: 20%;
  }
  .list-icon {
    width: 18%;
    font-size: 5px;
    margin-right: 2%;
  }
  .menu-container-title {
    display: flex;
    align-items: center;
  }
  .icon {
    width: 30%;
  }
  .container-title {
    width: 70%;
    margin-left: 15%;
  }
  .css-1kdilx0-MuiPaper-root-MuiAccordion-root {
    border: none;
  }

  .css-1fjvggn-MuiPaper-root-MuiAccordion-root.Mui-expanded:first-of-type,
  .css-1fjvggn-MuiPaper-root-MuiAccordion-root.Mui-expanded {
    .header-section {
      background-color: #556ff6;
      color: white;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .css-uvvswg-MuiButtonBase-root-MuiAccordionSummary-root
    .MuiAccordionSummary-content {
    margin: 0;
  }
  .css-1fjvggn-MuiPaper-root-MuiAccordion-root {
    border: none;
  }
  .css-ta84vm-MuiAccordionDetails-root {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: 1px solid #e8ecf0;
    border-right: 1px solid #e8ecf0;
    border-bottom: 1px solid #eff1f5;
    background-color: #fafbfc;
    border-top: none;
  }
  .icon-container {
    display: flex;
    align-items: center;
    color: #808aa1;
    &:hover {
      color: #556ff6;
      cursor: pointer;
    }
  }
`;
