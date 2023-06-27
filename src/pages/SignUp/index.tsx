import React, { useState, useEffect } from "react";

// Components
import Calendar from "react-calendar";
import HourPicker from "~/components/HourPicker";

// API
import API from "~/api";

// Assets
import tick_icon from "~/assets/ico-done.svg";

// Styles
import "react-calendar/dist/Calendar.css";
import { Container } from "./styles";

const SignUp = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [bookedHours, setBoookedHours] = useState<string[]>([]);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });

  const fetchHours = async () => {
    const response = await API.getHours(date);
    setBoookedHours(response.data);
    return response.data;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await API.bookPrayer({ ...userData, date, selectedHour });
    if (response) {
      setCompleted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchHours();
  }, [date]);

  return (
    <Container id="signup">
      <h2>Sign up to this movement</h2>
      {!completed ? (
        <div id="subscription">
          <Calendar onChange={setDate} value={date} className="calendar" />
          <HourPicker
            bookedHours={bookedHours}
            setSelectedHour={setSelectedHour}
          />
          <form onSubmit={onSubmit}>
            <p>30 minute prayer</p>
            <input
              placeholder="Name*"
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={userData?.name}
            />
            <input
              placeholder="Email*"
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={userData?.email}
            />
            <input
              placeholder="Phone"
              type="tel"
              name="phone"
              onChange={handleChange}
              value={userData?.phone}
            />
            <small>* Required</small>
            <button type="submit">Confirm</button>
          </form>
        </div>
      ) : (
        <div id="confirmation-screen">
          <img src={tick_icon} alt="" />
          <p id="confirmation">Your slot is confirmed, {userData.name}!</p>
          <p>{`${date.toLocaleString().slice(0, 10)} - ${selectedHour}`}</p>
        </div>
      )}
    </Container>
  );
};
export default SignUp;
