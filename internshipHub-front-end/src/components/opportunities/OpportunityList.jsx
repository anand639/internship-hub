import React, { useContext, useEffect, useState } from "react";
import OpportunityCard from "./OpportunityCard";
import api from "../../axiosConfig";
import { AuthContext } from "../../context/AuthContext";

const OpportunityList = () => {
  const [opportunities, setOpportunities] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await api.get("/opportunities");
      if (res?.data?.data) {
        setOpportunities(res?.data?.data);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          auth={auth}
          opportunity={opportunity}
        />
      ))}
    </div>
  );
};

export default OpportunityList;
