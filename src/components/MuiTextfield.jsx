import React,{useState} from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const MuiTextfield = () => {
  const [value,setValue] = useState('')
  return (
    <Stack  spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="outlined"
          variant="outlined"
          size="small"
          color="secondary"
          onChange={(e)=>setValue(e.target.value)}
          value={value}
          error = {!value}
          helperText = {!value ? 'enter password' : 'do not share your password with anyone'}
          
        />
        <TextField label="standard" variant="standard" />
        <TextField
          label="filled"
          variant="filled"
          helperText="this is a filled text."
          size="small"
        />
        <TextField
          label="disabled field"
          variant="filled"
          helperText="this is a disabled textfield."
          disabled
          size="small"
        />
        <TextField
          label="read only field"
          variant="filled"
          helperText="this is a readonly textfield."
          InputProps={{ readOnly: true }}
          size="small"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          type="number"
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          helperText="it uses a InputAdornment with position start In startAdornent"
          size="small"
        />
        <TextField
          type="number"
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
          helperText="it uses a InputAdornment with position end In endAdornent"
          size="small"
        />
        <TextField
        type="password"
        label="enter your password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {<VisibilityOffOutlinedIcon />}
            </InputAdornment>
            
          ),
        }}
        size="small"
      />
      </Stack>
      
      
      </Stack>
   
  );
};

export default MuiTextfield;
