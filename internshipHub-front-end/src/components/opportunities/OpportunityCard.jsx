import { useEffect, useState } from "react";
import ApplyButton from "../ApplyButton";

const OpportunityCard = ({ opportunity, auth }) => {
  const [isApplied, setisApplied] = useState(false);
  useEffect(() => {
    checkList();
  }, [opportunity]);
  const checkList = () => {
    setisApplied(opportunity?.applicants.includes(auth?.user?._id));
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{opportunity?.title}</h3>
      <p className="text-gray-700">
        <strong>Company:</strong> {opportunity?.company_name}
      </p>
      <p className="text-gray-700">
        <strong>Employment Type:</strong> {opportunity?.employment_type}
      </p>
      <p className="text-gray-700">
        <strong>Stipend:</strong> {opportunity?.stipend.salary}{" "}
        {opportunity?.stipend.currency}
      </p>
      <p className="text-gray-700">
        <strong>Duration:</strong> {opportunity?.duration}
      </p>
      <p className="text-gray-700">
        <strong>Start Date:</strong> {opportunity?.start_date}
      </p>
      <p className="text-gray-700">
        <strong>Locations:</strong> {opportunity?.location_names.join(", ")}
      </p>
      <p className="text-gray-700">
        <strong>Expires At:</strong>{" "}
        {new Date(opportunity?.expires_at).toDateString()}
      </p>
      {/* Additional fields you can consider adding */}
      <p className="text-gray-700">
        <strong>Company URL:</strong> {opportunity?.company_url}
      </p>
      <p className="text-gray-700">
        <strong>Company Logo:</strong>{" "}
        <img src={opportunity?.company_logo} alt="Company Logo" />
      </p>
      <p className="text-gray-700">
        <strong>Employer Name:</strong> {opportunity?.employer_name}
      </p>
      <p className="text-gray-700">
        <strong>Is Premium:</strong> {opportunity?.is_premium ? "Yes" : "No"}
      </p>
      <ApplyButton
        isApplied={isApplied}
        setisApplied={setisApplied}
        opportunityId={opportunity?._id}
      />
    </div>
  );
};

export default OpportunityCard;
