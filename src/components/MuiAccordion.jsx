import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 2 }}>
      <Accordion expanded={expanded === "panel1"}>
        <AccordionSummary
          id="panel1-heading"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "panel1")
          }
        >
          <Typography>Accordion-1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            explicabo fuga ipsam optio officia repellendus, nihil totam. Hic
            temporibus maxime laborum a voluptates aliquid neque modi!
            Nesciunt, a deserunt. Inventore.little bit confusing
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-heading"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion-2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            explicabo fuga ipsam optio officia repellendus, nihil totam. Hic
            temporibus maxime laborum a voluptates aliquid neque modi!
            Nesciunt, a deserunt. Inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-heading"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion-3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            explicabo fuga ipsam optio officia repellendus, nihil totam. Hic
            temporibus maxime laborum a voluptates aliquid neque modi!
            Nesciunt, a deserunt. Inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
