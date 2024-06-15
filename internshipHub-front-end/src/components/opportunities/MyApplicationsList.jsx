import React, { useContext, useEffect, useState } from "react";
import OpportunityCard from "./OpportunityCard";
import api from "../../axiosConfig";
import { AuthContext } from "../../context/AuthContext";
import MyApplicationsCard from "./MyAppllicationsCard";

const MyApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await api.get("/opportunities/my-applications");
      if (res?.data?.data?.applicants) {
        setApplications(res.data?.data?.applicants);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {applications.map((application) => (
        <MyApplicationsCard
          key={application.id}
          auth={auth}
          application={application}
        />
      ))}
    </div>
  );
};

export default MyApplicationsList;
