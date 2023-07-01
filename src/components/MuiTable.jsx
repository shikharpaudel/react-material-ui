import React from 'react'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
const tableData = [{
    "id": 1,
    "first_name": "Beale",
    "last_name": "Barlas",
    "email": "bbarlas0@msu.edu",
    "gender": "male",
    "ip_address": "156.63.225.11"
  }, {
    "id": 2,
    "first_name": "Merwin",
    "last_name": "Ryland",
    "email": "mryland1@cam.ac.uk",
    "gender": "Male",
    "ip_address": "206.213.65.23"
  }, {
    "id": 3,
    "first_name": "Kendrick",
    "last_name": "Steed",
    "email": "ksteed2@yolasite.com",
    "gender": "Male",
    "ip_address": "242.147.114.254"
  }, {
    "id": 4,
    "first_name": "Jacinthe",
    "last_name": "Marklew",
    "email": "jmarklew3@wiley.com",
    "gender": "Female",
    "ip_address": "93.83.188.153"
  }, {
    "id": 5,
    "first_name": "Kalindi",
    "last_name": "McGinney",
    "email": "kmcginney4@senate.gov",
    "gender": "Female",
    "ip_address": "37.48.214.66"
  }, {
    "id": 6,
    "first_name": "Daniel",
    "last_name": "Pendlington",
    "email": "dpendlington5@surveymonkey.com",
    "gender": "Male",
    "ip_address": "71.9.192.30"
  }, {
    "id": 7,
    "first_name": "Alfie",
    "last_name": "Coste",
    "email": "acoste6@microsoft.com",
    "gender": "Female",
    "ip_address": "163.189.232.131"
  }, {
    "id": 8,
    "first_name": "Feliks",
    "last_name": "Rayman",
    "email": "frayman7@mediafire.com",
    "gender": "Agender",
    "ip_address": "136.15.119.109"
  }, {
    "id": 9,
    "first_name": "Ofella",
    "last_name": "Donneely",
    "email": "odonneely8@springer.com",
    "gender": "Female",
    "ip_address": "187.231.15.112"
  }, {
    "id": 10,
    "first_name": "Bess",
    "last_name": "Claffey",
    "email": "bclaffey9@skype.com",
    "gender": "Female",
    "ip_address": "225.69.82.217"
  }]
  
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table sx={{minWidth:'650px'}} stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
               {tableData.map((table)=>(
                <TableRow key={table.id}>
                    <TableCell>{table.id}</TableCell>
                    <TableCell>{table.first_name}</TableCell>
                    <TableCell>{table.last_name}</TableCell>
                    <TableCell>{table.email}</TableCell>
                    <TableCell>{table.gender}</TableCell>
                </TableRow>
               ))}
                </TableBody>
           
        </Table>
    </TableContainer>
  )
}

export default MuiTable;
