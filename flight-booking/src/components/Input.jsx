/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlight } from "../redux/flights/actions";

const Input = () => {
    const flights = useSelector((state) => state.flights);
    const dispatch = useDispatch();
    const [flightData, setFlightData] = useState({
        id: crypto.randomUUID(),
        destinationFrom: '',
        destinationTo: '',
        journeyDate: '',
        guests: 0,
        ticketClass: ''
    });

    function onChange(e) {
        setFlightData({
            ...flightData,
            [e.target.id]: e.target.value
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(addFlight(flightData))
        setFlightData({
            id: crypto.randomUUID(),
            destinationFrom: '',
            destinationTo: '',
            journeyDate: '',
            guests: 0,
            ticketClass: ''
        });
        if (flights.length === 3) {
            alert(`Booking limit has exceeded`)
        }
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form
                    onSubmit={onSubmit}
                    className="first-hero lws-inputform">

                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                value={flightData.destinationFrom}
                                onChange={(e) => onChange(e)}
                                className="outline-none px-2 py-2 w-full" name="from" id="destinationFrom" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>{`Cox's`} Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                value={flightData.destinationTo}
                                onChange={(e) => onChange(e)}
                                className="outline-none px-2 py-2 w-full" name="to" id="destinationTo" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>{`Cox's`} Bazar</option>
                            </select>
                        </div>
                    </div>


                    <div className="des-from">
                        <p>Journey Date</p>
                        <input
                            value={flightData.journeyDate}
                            onChange={(e) => onChange(e)}
                            type="date" className="outline-none px-2 py-2 w-full date" name="date" id="journeyDate" required />
                    </div>

                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Vector (1).svg" alt="" />
                            <select
                                value={flightData.guests}
                                onChange={(e) => onChange(e)}
                                className="outline-none px-2 py-2 w-full" name="guests" id="guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value={1}>1 Person</option>
                                <option value={2}>2 Persons</option>
                                <option value={3}>3 Persons</option>
                                <option value={4}>4 Persons</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src="./img/icons/Vector (3).svg" alt="" />
                            <select
                                value={flightData.ticketClass}
                                onChange={(e) => onChange(e)}
                                className="outline-none px-2 py-2 w-full" name="ticketClass" id="ticketClass" required>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Input;