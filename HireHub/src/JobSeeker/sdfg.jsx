import React, { useState } from "react";

function Sdfg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      experience,
      skills,
      coverLetter,
      resume,
    };

    console.log(formData);
    alert("Application Submitted Successfully 🚀");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 shadow-sm mt-4"
      style={{
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "15px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h4 className="mb-3 fw-bold text-center" style={{ color: "#13357b" }}>
        Apply for Job
      </h4>

      {/* Name */}
      <div className="mb-3">
        <label className="fw-semibold">Full Name</label>
        <input
          type="text"
          className="form-control mt-1 rounded-pill"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="fw-semibold">Email</label>
        <input
          type="email"
          className="form-control mt-1 rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="fw-semibold">Phone</label>
        <input
          type="tel"
          className="form-control mt-1 rounded-pill"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      {/* Experience */}
      <div className="mb-3">
        <label className="fw-semibold">Experience (Years)</label>
        <input
          type="number"
          className="form-control mt-1 rounded-pill"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>

      {/* Skills */}
      <div className="mb-3">
        <label className="fw-semibold">Skills</label>
        <input
          type="text"
          className="form-control mt-1 rounded-pill"
          placeholder="React, Node, Python..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>

      {/* Resume Upload */}
      <div className="mb-3">
        <label className="fw-semibold">Upload Resume</label>
        <input
          type="file"
          className="form-control mt-1"
          onChange={(e) => setResume(e.target.files[0])}
        />
      </div>

      {/* Cover Letter */}
      <div className="mb-3">
        <label className="fw-semibold">Cover Letter</label>
        <textarea
          className="form-control mt-1"
          rows="3"
          placeholder="Why should we hire you?"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        ></textarea>
      </div>

      {/* Submit */}
      <div className="text-end">
        <button
          type="submit"
          className="btn text-light px-4 rounded-pill"
          style={{ backgroundColor: "#13357b" }}
        >
          Apply Now 🚀
        </button>
      </div>
    </form>
  );
}

export default Sdfg;
