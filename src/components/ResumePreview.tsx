import React from "react";
import { ResumeFormInputs } from "./ResumeForm";

interface ResumePreviewProps {
  resumeParams: ResumeFormInputs | null;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeParams }) => {
  if (!resumeParams) {
    return (
      <div
        className="resume-preview-content"
        style={{ color: "#bbb", textAlign: "center", paddingTop: "3rem" }}
      >
        <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>✨</span>
        your resume will appear here...
      </div>
    );
  }

  return (
    <div
      id="resume-preview-to-download"
      className="resume-preview-content resume-template-card"
      role="region"
      aria-label="Resume preview"
      style={{
        backgroundColor: "#334e3d",
        borderRadius: "20px",
        padding: "30px 30px 40px 30px",
        color: "#caffc4",
        maxWidth: "550px",
        margin: "0 auto",
        boxShadow: "0 5px 25px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.5,
        textAlign: "left",
      }}
    >
      {/* Name and Role */}
      <h1 style={{
        fontWeight: "bold",
        fontSize: "2rem",
        letterSpacing: "0.02em",
        marginBottom: "0.3em",
        borderBottom: "2px solid #9cffb9",
        paddingBottom: "0.3em",
      }}>
        {resumeParams.name || "Your Name"}
      </h1>

      <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.6em" }}>
        {resumeParams.role}
      </div>

      {/* Industry */}
      {resumeParams.industry && (
        <p style={{
          fontStyle: "italic",
          fontSize: "1.1rem",
          marginBottom: "1.5em",
          color: "#a4c18f"
        }}>
          {resumeParams.industry}
        </p>
      )}

      {/* Contact & Details */}
      <div style={{ marginBottom: "1.2em" }}>
        <strong>Address:</strong> {resumeParams.address || '-'} <br />
        <strong>Phone:</strong> {resumeParams.phone || '-'} <br />
        <strong>Email:</strong> {resumeParams.email || '-'} <br />
        <strong>Nationality:</strong> {resumeParams.nationality || '-'}
      </div>

      {/* Summary */}
      {resumeParams.summary && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Summary
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>
            {resumeParams.summary}
          </p>
        </>
      )}

      {/* Skills */}
      {resumeParams.skills.length > 0 && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Skills
          </h2>
          <ul style={{
            paddingLeft: "1.2rem",
            marginBottom: "1.2em",
            listStyleType: "disc",
            fontSize: "1rem"
          }}>
            {resumeParams.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {/* Languages */}
      {resumeParams.languages.length > 0 && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Languages
          </h2>
          <ul style={{
            paddingLeft: "1.2rem",
            marginBottom: "1.2em",
            fontSize: "1rem"
          }}>
            {resumeParams.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </>
      )}

      {/* Experience */}
      {resumeParams.experience && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Experience
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>
            {resumeParams.experience}
          </p>
        </>
      )}

      {/* Education */}
      {resumeParams.education && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Education
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>
            {resumeParams.education}
          </p>
        </>
      )}

      {/* Achievements */}
      {resumeParams.achievements && (
        <>
          <h2 style={{
            fontWeight: "600",
            fontSize: "1.3rem",
            color: "#b3ddb9",
            marginBottom: "0.5em",
          }}>
            Achievements
          </h2>
          <p style={{ marginBottom: "1.2em", fontSize: "1rem" }}>
            {resumeParams.achievements}
          </p>
        </>
      )}

    </div>
  );
};

export default ResumePreview;

