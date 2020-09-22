import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowForward } from 'react-icons/io';

export default function DateInput(props){
  const [open, setOpen] = useState(false)
  const [dateParams, setDateParams] = useState({day: null, month: new Date().getMonth(), year: new Date().getFullYear()})
  const [value, setValue] = useState(props.placeholder)
  const control = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", toggle);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, []);

  const toggle = (e) => {
    if (control.current.contains(e.target) === false){
      setOpen(false)
    }
  }

  const generateTable = () => {
    let monthDays = new Date(dateParams.year, dateParams.month, 0).getDate();
    let returnArray = [];
    for (let i = 0; i < monthDays; i++){
      if (i === 0){
        let weekDays = new Date(dateParams.year, dateParams.month, i).getDay();
        for (let j = 0; j <= weekDays; j++){
          returnArray.push(<div/>)
        }
      }
      else{
        returnArray.push(
          <div 
            onClick={() => {
              setValue(new Date(dateParams.year, dateParams.month, i).toLocaleDateString())
              setDateParams({...dateParams, day: i})
            }}
            className={dateParams.day === i ? "selectedDay" : ""}
          >
            {i}
          </div>
        )
      }
    }
    return returnArray;
  }

  return(
    <div className="dateInput">
      <p>{props.label}</p>
      <div
        className='dateInputControl'
        onClick={() => {
          setOpen(true)
        }}
      >
        <p className={props.placeholder === value ? "dateInputControlLabel" : "dateInputControlLabel selected"}>{value}</p>
        <div ref={control} className={open ? "dateSelection open" : "dateSelection"}>
          <div className="dateSelectionArrows">
            <IoIosArrowDropleft
              onClick={() => { setDateParams({...dateParams, day: null, year: dateParams.year - 1}); setValue(props.placeholder);}}
              size="30px"
            />
            <IoIosArrowBack
              onClick={() => { 
                dateParams.month === 0 ? 
                  setDateParams({...dateParams, day: null, month: 11, year: dateParams.year - 1}) 
                  : setDateParams({...dateParams, day: null, month: dateParams.month - 1});
                setValue(props.placeholder);
              }}
              size="25px"
            />
            <div>
              {
                dateParams.day === null ? 
                  new Date(dateParams.year, dateParams.month).toLocaleString('default', {month: 'long', year: 'numeric'})
                  : new Date(dateParams.year, dateParams.month, dateParams.day).toLocaleString('default', {month: 'long', year: 'numeric', day: 'numeric'})
              }
            </div>
            <IoIosArrowForward
              onClick={() => { 
                dateParams.month === 0 ? 
                  setDateParams({day: null, month: 0, year: dateParams.year + 1}) 
                  : setDateParams({...dateParams, day: null, month: dateParams.month + 1});
                setValue(props.placeholder);
              }}
              size="25px"
            />
            <IoIosArrowDropright
              onClick={() => { setDateParams({...dateParams, day: null, year: dateParams.year + 1}); setValue(props.placeholder);}}
              size="30px"
            />
          </div>
          <div className="dateSelectionTable">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            {generateTable()}
          </div>
        </div>
      </div>
    </div>
  )
}