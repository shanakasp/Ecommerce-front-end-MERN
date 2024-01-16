import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css"; // Import the CSS file
import NavBar from "../Nav";

const App = () => {
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  const handleChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleChange2 = (date) => {
    setSelectedDate2(date);
  };

  // Custom day class for styling prohibited dates
  const dayClassName = (date) => {
    if (selectedDate1 && date < selectedDate1) {
      return "prohibited-date";
    }
    return "";
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Form>
          <Form.Group className="m-4">
            <FloatingLabel
              controlId="exampleForm.ControlLabel1"
              label="Date Joined"
            >
              <DatePicker
                selected={selectedDate1}
                onChange={handleChange1}
                dateFormat="MM/dd/yyyy"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="m-4">
            <FloatingLabel
              controlId="exampleForm.ControlLabel2"
              label="Date Fired"
            >
              <DatePicker
                selected={selectedDate2}
                onChange={handleChange2}
                dateFormat="MM/dd/yyyy"
                minDate={selectedDate1}
                dayClassName={dayClassName} // Apply custom class to prohibited dates
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default App;
