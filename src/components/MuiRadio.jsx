import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiRadio = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-label-id">
          Select Your Experience
        </FormLabel>
        <RadioGroup
          value={selectedValue}
          onChange={handleSelect}
          name="job-experience-group"
          aria-labelledby="job-experience-group"
          row
        >
          <FormControlLabel
            control={<Radio size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="3-6"
            value="3-6"
            
          />
          <FormControlLabel
            control={<Radio  />}
            label="7-9"
            value="7-9"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="10 or more"
            value="10+"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
