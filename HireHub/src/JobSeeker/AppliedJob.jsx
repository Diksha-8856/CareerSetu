import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { AppliedJobCard } from "../Components/Card";
import axios from "axios";

function MyApplications() {
  const [applyedJob, setApplyJob] = useState([]);
  const appleidJodData = async () => {
    const response = await axios.get(`http://localhost:8002/api/applyJob`);
    // console.log(response);
    if (response.data.msg === "Success") {
      setApplyJob(response.data.applyjob);
    }
  };
  useEffect(() => {
    appleidJodData();
  }, []);
  return (
    <Col
      sm={10}
      style={{
        overflow: "auto",
        height: "100vh",
        backgroundColor: ` #ededed`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-4">
        {/* Heading */}
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#13357b" }}>
          My Applications
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {applyedJob.map((u, i) => (
            <AppliedJobCard
              jobType={u.name}
              company="{Google}"
              status="Pending"
              location="Delhi"
              salary="6"
              date="10 April 2026"
              desc="Looking for React developer with modern UI skills."
            />
          ))}
        </div>
      </div>
    </Col>
  );
}

export default MyApplications;
