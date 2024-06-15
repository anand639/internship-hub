import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import api from "../axiosConfig";

const ApplyButton = ({ opportunityId, setisApplied, isApplied }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const apply = async () => {
    if (!auth.token) {
      navigate("/login");
      return;
    }

    try {
      const res = await api.post(`/opportunities/apply`, { opportunityId });
      console.log(res, "res");
      if (res?.data?.msg === "Applied Successfully") {
        alert("Applied successfully");
        setisApplied(true);
      } else {
        alert("Failed to apply");
      }
    } catch (err) {
      console.error(err.message);
      alert("Failed to apply");
    }
  };

  return (
    <button
      onClick={()=>!isApplied ? apply() : alert("already applied")}
      className={` ${
        isApplied ? "bg-green-500" : "bg-blue-600"
      } text-white px-4 py-2 rounded mt-4 hover:bg-green-700`}
    >
      {isApplied ? <div>Applied</div> : <div>Apply</div>}
    </button>
  );
};

export default ApplyButton;
