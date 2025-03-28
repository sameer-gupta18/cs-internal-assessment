import React from "react";
import NavMargin from "../../components/NavMargin";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Error404 from "../Error404";
import { FaCheck } from "react-icons/fa6";
import {} from "./webinarconfirmation.css";
import Footer from "../../components/Footer/Footer";
function WebinarConfirmation() {
  let { state } = useLocation();
  const participant = state
    ? state.updatedWebinar.participants[
        state.updatedWebinar.participants.length - 1
      ]
    : null;
  return (
    <>
      {participant ? (
        <>
          <NavMargin />
          <div className="webinar-confirmation-container">
            <FaCheck />
            <h2>Successfully Registered You for </h2>
            <h1>{state.updatedWebinar.name}</h1>
            <div className="information-container-webinar-confirmation">
              <p>{participant.name}</p>
              <p>{participant.phone_number}</p>
              <p>Time: {state.updatedWebinar.time}</p>
              <p>Date: {state.updatedWebinar.date}</p>
            </div>
            {state.updatedWebinar.tags.offline ? (
              <></>
            ) : (
              <a href={state.updatedWebinar.link} target="_blank" rel='noreferrer'>
                Join the Webinar
              </a>
            )}
          </div>
          <Footer/>
        </>
      ) : (
        <Error404 />
      )}
    </>
  );
}

export default WebinarConfirmation;
