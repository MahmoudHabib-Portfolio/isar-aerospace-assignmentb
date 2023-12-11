import '../App.css';
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "@mui/material/TableHead";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { FaSyncAlt } from "react-icons/fa";

const TaskA = () => {

  const [SensorVal, setSensorVal] = useState({});
  //Async Data with API request
  const AsyncData = async () => {
    const res = await fetch("https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus");
    const data = await res.json();
    return setSensorVal(data);
  }

  //Fetching SpectrumStatus with get
  const FetchData = async () => {
    const res = await fetch("https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus");
    const data = await res.json();
    return data;
  }

  //Fetching Sensor Values with useEffect
  useEffect(() => {
    //rendering new data every ~500ms
   
      const getData = async () => {
        const Values = await FetchData();
        setSensorVal(Values);
      }
      getData();
   
  });

  return (
    <>
        <TableContainer component={Paper} sx={{backgroundColor:"#181818"}}>
        <Table aria-label="collapsible table" sx={{tableLayout:"fixed"}}>
          <TableBody>
          <TableRow>
        <TableCell align="center" colSpan={7}>
                <b className='font-sans text-white text-2xl'>Task A</b>
            </TableCell>
        </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
        <div className="grid w-full">
        <TableContainer component={Paper} sx={{backgroundColor:"#181818"}}>
      <Table aria-label="collapsible table" sx={{backgroundColor:"#181818"}}>
        <TableHead>
          <TableRow sx={{ "& th": { padding: "12px 16px", borderColor:"#4d4d4d"} }}>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>Velocity</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>Altitude</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>Temperature</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>IsAscending</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>IsActionRequired</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px"}}>AutoSync</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
        <TableRow sx={{ "& td": { padding: "8px 20px", borderColor:"#4d4d4d"} }}>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SensorVal.velocity}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SensorVal.altitude}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SensorVal.temperature}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{`${SensorVal.isAscending}`}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{`${SensorVal.isActionRequired}`}</span>
        </TableCell>
        <TableCell align="center">
        <IconButton
            sx={{color:"#fff", borderRadius:"0", padding:"4px 25px"}}
            size="small"
            disableRipple={true}
            onClick={AsyncData}>
        <FaSyncAlt className="text-xl font-bold text-plbck"/>
        </IconButton>
        </TableCell>
       </TableRow>
       <TableRow>
        <TableCell align="center" colSpan={6}>
                <b className='font-sans text-tomato tracking-widest text-lg'>Status Message</b>
            </TableCell>
        </TableRow>
        <TableRow>
        <TableCell align="center" colSpan={6}>
          <span className="text-base font-sans text-green-500 font-semibold tracking-wider">{SensorVal.statusMessage}</span>
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        </div>
    </>
  )
}

export default TaskA;