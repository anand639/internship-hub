import { useEffect, useState } from "react";
import ApplyButton from "../ApplyButton";

const MyApplicationsCard = ({ application, auth }) => {
  const [isApplied, setisApplied] = useState(false);
  useEffect(() => {
    checkList();
  }, [application]);
  const checkList = () => {
    setisApplied(application?.applicants.includes(auth?.user?._id));
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{application?.title}</h3>
      <p className="text-gray-700">
        <strong>Company:</strong> {application?.company_name}
      </p>
      <p className="text-gray-700">
        <strong>Employment Type:</strong> {application?.employment_type}
      </p>
      <p className="text-gray-700">
        <strong>Stipend:</strong> {application?.stipend.salary}{" "}
        {application?.stipend.currency}
      </p>
      <p className="text-gray-700">
        <strong>Duration:</strong> {application?.duration}
      </p>
      <p className="text-gray-700">
        <strong>Start Date:</strong> {application?.start_date}
      </p>
      <p className="text-gray-700">
        <strong>Locations:</strong> {application?.location_names.join(", ")}
      </p>
      <p className="text-gray-700">
        <strong>Expires At:</strong>{" "}
        {new Date(application?.expires_at).toDateString()}
      </p>
      {/* Additional fields you can consider adding */}
      <p className="text-gray-700">
        <strong>Company URL:</strong> {application?.company_url}
      </p>
      <p className="text-gray-700">
        <strong>Company Logo:</strong>{" "}
        <img src={application?.company_logo} alt="Company Logo" />
      </p>
      <p className="text-gray-700">
        <strong>Employer Name:</strong> {application?.employer_name}
      </p>
      <p className="text-gray-700">
        <strong>Is Premium:</strong> {application?.is_premium ? "Yes" : "No"}
      </p>
      <ApplyButton
        isApplied={isApplied}
        setisApplied={setisApplied}
        opportunityId={application?._id}
      />
    </div>
  );
};

export default MyApplicationsCard;
