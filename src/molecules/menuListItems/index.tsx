import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { MenuListProps } from "./types";

import { MenuStyles } from "./styled-components";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "white",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export function MenuListItems({ menuElements }: MenuListProps) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  var num = 0;

  return (
    <MenuStyles>

      <div className="menu-bars-section">
        {menuElements.map((menu, index) => {
          num += 1;
          var settingForAccardeon = "panel" + `${num}`;
          return (
            <Accordion
              key={index}
              expanded={expanded === settingForAccardeon}
              onChange={handleChange(settingForAccardeon)}
            >
              <AccordionSummary
                className={"header-section"}
                aria-controls="panel1d-content"
              >
                <div>
                  <Typography className={"menu-container-title"}>
                    <FontAwesomeIcon icon={menu.icon} className={"icon"} />
                    <span className="container-title">{menu.title}</span>
                  </Typography>
                </div>
              </AccordionSummary>
              <div className={`analytics-hide-elements`}>
                <AccordionDetails>
                  <Typography className="icon-container">
                    <FontAwesomeIcon icon={faCircle} className={"list-icon"} />
                    <span>Reports</span>
                  </Typography>
                  <Typography className="icon-container">
                    <FontAwesomeIcon icon={faCircle} className={"list-icon"} />
                    <span>Live Reports</span>
                  </Typography>
                </AccordionDetails>
              </div>
            </Accordion>
          );
        })}
      </div>
    </MenuStyles>
  );
}
