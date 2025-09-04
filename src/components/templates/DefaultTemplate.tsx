import React from "react";
import { ResumeFormInputs } from "../ResumeForm";

interface Props {
  resumeParams: ResumeFormInputs | null;
}

const DefaultTemplate: React.FC<Props> = ({ resumeParams }) => {
  if (!resumeParams) return <div>No resume data</div>;

  return (
    <div
      id="resume-preview-to-download"
      style={{
        backgroundColor: "#334e3d",
        borderRadius: "20px",
        padding: "30px",
        color: "#caffc4",
        maxWidth: "550px",
        margin: "0 auto",
        boxShadow: "0 5px 25px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.5,
        textAlign: "left",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          letterSpacing: "0.02em",
          marginBottom: "0.3em",
          borderBottom: "2px solid #9cffb9",
          paddingBottom: "0.3em",
        }}
      >
        {resumeParams.name || "Your Name"}
      </h1>

      <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.6em" }}>
        {resumeParams.role}
      </div>

      {resumeParams.industry && (
        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.1rem",
            marginBottom: "1.5em",
            color: "#a4c18f",
          }}
        >
          {resumeParams.industry}
        </p>
      )}

      <div style={{ marginBottom: "1.2em" }}>
        <strong>Address:</strong> {resumeParams.address || "-"} <br />
        <strong>Phone:</strong> {resumeParams.phone || "-"} <br />
        <strong>Email:</strong> {resumeParams.email || "-"} <br />
        <strong>Nationality:</strong> {resumeParams.nationality || "-"}
      </div>

      {resumeParams.summary && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Summary
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>{resumeParams.summary}</p>
        </>
      )}

      {resumeParams.skills.length > 0 && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Skills
          </h2>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.2em", fontSize: "1rem", listStyleType: "disc" }}>
            {resumeParams.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {/* Similarly add other sections like Languages, Experience, Education, Achievements */}
      {resumeParams.languages.length > 0 && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Languages
          </h2>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.2em", fontSize: "1rem", listStyleType: "disc" }}>
            {resumeParams.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </>
      )}

      {resumeParams.experience && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Experience
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>{resumeParams.experience}</p>
        </>
      )}

      {resumeParams.education && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Education
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>{resumeParams.education}</p>
        </>
      )}

      {resumeParams.achievements && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", color: "#b3ddb9", marginBottom: "0.5em" }}>
            Achievements
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>{resumeParams.achievements}</p>
        </>
      )}
    </div>
  );
};

export default DefaultTemplate;
