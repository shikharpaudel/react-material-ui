import React, { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    console.log(countries);
} , [countries])
  const handleChange = (event) => {
   
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
    
  };

  return (
    <Box width="250px">
      <TextField
        label="Please select your countries"
        value={countries}
        onChange={handleChange}
        fullWidth
        select
        size="small"
        color="secondary"
        multiple
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="NEP">Nepal</MenuItem>
        <MenuItem value="CAN">Canada</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
