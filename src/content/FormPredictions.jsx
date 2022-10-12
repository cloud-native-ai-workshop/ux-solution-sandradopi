import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Select, Row, TimePicker, DatePicker,DatePickerInput, Button
} from '@carbon/react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import axios from "axios";
export default function FormPredictions(props) {
  const [state, setState] = React.useState({
    electricalapliance: "Air conditioner",
    date:"",
    starttime:"",
    endtime:"",
    prediction:""
  });


function handleChange(event) {
    console.log(event.target)
    console.log(event.target.name)
    const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value,
      });
    
  }

  
function handleChangeDate(event) {
  console.log(event)
  const value = event;
    setState({
      ...state,
      ['date']: value,
    });
  
}

function HandleRequest(e) {
    console.log("Fruit Selected!!");
    console.log(state);
    let random_prediction= 70 + (Math.random() * (100-70))
    let result= 'Of all the time ranges, the one that has obtained the best results is 11:00-12:00 with a score of ' + random_prediction.toFixed(2)
    setState({
      ...state,
      ['prediction']: result,
    });


  


      axios
        .post("/api/from_prediction", state)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    

  }

const options = [
    {
      label: "Air conditioner",
      value: "Air conditioner",
    },
    {
      label: "Clothes dryer",
      value: "Clothes dryer",
    },
    {
      label: "Dishwasher",
      value: "Dishwasher",
    },
    {
        label: "Freezer",
        value: "Freezer",
      },
      {
        label: "Hairdryer",
        value: "Hairdryer",
      },
      {
        label: "Iron",
        value: "Iron",
      },
      {
        label: "Microwave",
        value: "Microwave",
      },
      {
        label: "Radiator",
        value: "Radiator",
      },
      {
        label: "Refrigerator",
        value: "Refrigerator",
      },
      {
        label: "Vacuum Cleaner",
        value: "Vacuum Cleaner",
      },
      {
        label: "Washing Machine",
        value: "Washing Machine",
      },
     
  ];

    return (
        <div className='stock-items-list'>
            <h2  style={{ marginBottom:20 }}>Let´s Go!</h2>
            <Row>
                <label  style={{ fontSize: 14}}>Electrical apliance</label>
                <div className="select-container">
                    <Select  
                        id="select-electricalapliance"
                        name= "electricalapliance"
                        value={state.electricalapliance}
                        onChange={handleChange} 
                        style={{  marginTop:10, marginBottom:10}} labelText="">
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </Select>
        </div>
            </Row>
            <Row>
                <label  style={{ fontSize: 14}}>Date</label>
                <DatePicker    
                style={{  marginTop:10, marginBottom:10}}
                datePickerType="single"
                value={state.date} 
                onChange={handleChangeDate}
                name= "date"
                >
                    <DatePickerInput  
                        value={state.date} 
                        name= "date"
                        onChange={handleChangeDate}
                        id="date-picker-single"
                        labelText=""
                        placeholder="mm/dd/yyyy"
                    />
                </DatePicker>
            </Row>
                <label  style={{ fontSize: 14}}>Start time</label>
                <TimePicker 
                    name= "starttime"   
                    value={state.starttime} 
                    onChange={handleChange}
                    style={{  marginTop:10, marginBottom:10}}
                    id="time-picker1"
                    labelText=""
                    size="md"
                    ></TimePicker>
            <Row>            
                <label  style={{ fontSize: 14}}>End time</label>
                <TimePicker  
                    name= "endtime"    
                    value={state.endtime}
                    onChange={handleChange}
                    style={{  marginTop:10,  marginBottom:10}}
                    id="time-picker2"
                    labelText=""
                    size="md"
                    ></TimePicker>
            </Row>
            <Row> 
                <Button onClick={HandleRequest}>Calculate</Button>
            </Row>
            <Row> 
              <h4 style={{ marginTop:20 }}>{state.prediction}</h4>
            </Row>



        </div>
    );
}
