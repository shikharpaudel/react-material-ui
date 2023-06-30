import React, { useEffect, useState } from "react";
import { Stack, TextField, Autocomplete } from "@mui/material";

const Skills = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JAVASCRIPT" },
  { id: 4, label: "TYPESCRIPT" },
  { id: 5, label: "REACT" }
];

const MuiAutocomplete = () => {
  const [value, setValue] = useState(Skills[0]);

  useEffect(() => {
    console.log({ value });
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={Skills}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
