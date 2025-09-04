import React from "react";
import { ResumeFormInputs } from "../ResumeForm";

interface Props {
  resumeParams: ResumeFormInputs | null;
}

const ModernTemplate: React.FC<Props> = ({ resumeParams }) => {
  if (!resumeParams) return <div>No resume data</div>;

  return (
    <div
      id="resume-preview-to-download"
      style={{
        padding: 30,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#e3f2fd",
        borderRadius: 12,
        color: "#0d47a1",
        textAlign: "left",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>{resumeParams.name || "Your Name"}</h1>
      <h2 style={{ fontWeight: "300", color: "#1565c0", marginBottom: "1em" }}>{resumeParams.role}</h2>

      {resumeParams.industry && (
        <p style={{ fontStyle: "italic", fontSize: "1.1rem", marginBottom: "1em" }}>{resumeParams.industry}</p>
      )}

      <hr style={{ borderColor: "#1565c0", marginBottom: "1em" }} />

      <p>
        <strong>Contact:</strong> {resumeParams.phone || "-"} | {resumeParams.email || "-"}
      </p>

      {resumeParams.summary && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", marginTop: "1.5em", marginBottom: "0.5em" }}>
            Summary
          </h2>
          <p>{resumeParams.summary}</p>
        </>
      )}

      {resumeParams.skills.length > 0 && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", marginTop: "1.5em", marginBottom: "0.5em" }}>
            Skills
          </h2>
          <ul style={{ paddingLeft: "1.2rem", listStyleType: "disc" }}>
            {resumeParams.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {resumeParams.experience && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", marginTop: "1.5em", marginBottom: "0.5em" }}>
            Experience
          </h2>
          <p>{resumeParams.experience}</p>
        </>
      )}

      {resumeParams.education && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", marginTop: "1.5em", marginBottom: "0.5em" }}>
            Education
          </h2>
          <p>{resumeParams.education}</p>
        </>
      )}

      {resumeParams.achievements && (
        <>
          <h2 style={{ fontWeight: "600", fontSize: "1.3rem", marginTop: "1.5em", marginBottom: "0.5em" }}>
            Achievements
          </h2>
          <p>{resumeParams.achievements}</p>
        </>
      )}
    </div>
  );
};

export default ModernTemplate;
