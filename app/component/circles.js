'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles1.css';

function CircularProgressBar(props) {

  return (
    <div style={{textAlign:"center"}}>

        <CircularProgressbar value={props.value}/>
    </div>
  );
}
export default CircularProgressBar;