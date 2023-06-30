import React,{useEffect, useState} from "react";
import { Box,FormGroup, FormControl, Checkbox, FormLabel, FormControlLabel } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckbox = () => {
    const[accepted,setAccepted] = useState(false);
   
    /* const handleChange = (event)=>{
     setAccepted(event.target.checked);
    } */
    const [skills,setSkills] = useState([]);
    useEffect(()=>{
        console.log(skills);
    },[skills])
    const handleSkillChange=(event)=>{
   const index = skills.indexOf(event.target.value);
   if(index === -1){
    setSkills([...skills,event.target.value]);
   }else{
    setSkills(skills.filter((skill)=> skill !== event.target.value))
   }
    }
  return (
    <Box>
   {/*    <FormControlLabel
        label="I Accept The Terms And Conditions."
        control={<Checkbox checked = {accepted} onChange={handleChange} />}
      />
      <Box>
   <Checkbox icon = {<BookmarkBorderIcon/>}
   checkedIcon = {<BookmarkIcon />}
   checked = {accepted}
   onChange={handleChange}/>
      </Box> */}
   <FormControl>
    <FormLabel>
        Skills
    </FormLabel>
    <FormGroup>
        <FormControlLabel label = 'HTML' control={<Checkbox value='Html' checked = {skills.includes('Html')} onChange={handleSkillChange} />}/>
        <FormControlLabel label = "CSS" control = {<Checkbox value="CSS" checked = {skills.includes('CSS')} onChange={handleSkillChange}/>}/>
        <FormControlLabel label = "JS" control={<Checkbox value="JS" checked = {skills.includes('JS')}/> }onChange={handleSkillChange}/>

        </FormGroup>
   </FormControl>
    </Box>
  );
};

export default MuiCheckbox;
