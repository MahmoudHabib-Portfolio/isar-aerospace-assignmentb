import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "@mui/material/TableHead";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ws = new WebSocket("wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS");

ws.addEventListener("open", () => {
  console.log("we are connected");
});

const TaskB = () => {
  const [SData, setSData] = useState({});
  let actC = "#ff6347";
  useEffect(() => {
    setTimeout(() => {
      ws.addEventListener("message", ({data}) => {
      const res = JSON.parse(data);
      return setSData(res);
      });
    }, 500);
  });

  if(SData.IsActionRequired === true){
    actC = "#55ba54";
  }

  return (
    <>
        <TableContainer component={Paper} sx={{backgroundColor:"#181818"}}>
        <Table aria-label="collapsible table" sx={{tableLayout:"fixed"}}>
          <TableBody>
          <TableRow>
        <TableCell align="center" colSpan={7}>
                <b className='font-sans text-white text-2xl'>Task B</b>
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
          </TableRow>
        </TableHead>
        <TableBody>
            
        <TableRow sx={{ "& td": { padding: "8px 20px", borderColor:"#4d4d4d"} }}>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SData.Velocity}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SData.Altitude}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-base font-sans text-white font-semibold">{SData.Temperature}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-lg font-sans text-white font-semibold">{`${SData.IsAscending}`}</span>
        </TableCell>
        <TableCell align="center">
          <span className="text-lg font-sans font-semibold" style={{color: actC}}>{`${SData.IsActionRequired}`}</span>
        </TableCell>
       </TableRow>
       <TableRow>
        <TableCell align="center" colSpan={5}>
                <b className='font-sans text-tomato tracking-widest text-lg'>Status Message</b>
            </TableCell>
        </TableRow>
        <TableRow>
        <TableCell align="center" colSpan={5}>
          <span className="text-base font-sans text-green-500 font-semibold tracking-wider">{SData.StatusMessage}</span>
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        </div>
    </>
  )
}

export default TaskB;