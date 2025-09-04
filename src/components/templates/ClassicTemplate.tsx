import React from "react";
import { ResumeFormInputs } from "../ResumeForm";

interface Props {
  resumeParams: ResumeFormInputs | null;
}

const ClassicTemplate: React.FC<Props> = ({ resumeParams }) => {
  if (!resumeParams) return <div>No resume data</div>;

  return (
    <div
      id="resume-preview-to-download"
      style={{
        padding: 25,
        fontFamily: "'Times New Roman', serif",
        maxWidth: 650,
        margin: "0 auto",
        backgroundColor: "#fff9f0",
        border: "1px solid #d2b48c",
        borderRadius: 8,
        color: "#8b4513",
        textAlign: "left",
      }}
    >
      <h1 style={{ fontWeight: "bold", borderBottom: "2px solid #8b4513", paddingBottom: 6 }}>
        {resumeParams.name || "Your Name"}
      </h1>

      <h3 style={{ fontStyle: "italic", marginTop: 0, marginBottom: "0.8em" }}>
        {resumeParams.role}
      </h3>

      {resumeParams.industry && <p style={{ fontStyle: "italic" }}>{resumeParams.industry}</p>}

      <hr style={{ borderColor: "#d2b48c", margin: "1em 0" }} />

      <p>
        <strong>Contact:</strong> {resumeParams.phone || "-"} | {resumeParams.email || "-"}
      </p>

      {resumeParams.summary && (
        <>
          <h2 style={{ fontWeight: "600", marginTop: "1.5em", marginBottom: "0.5em" }}>Summary</h2>
          <p>{resumeParams.summary}</p>
        </>
      )}

      {resumeParams.skills.length > 0 && (
        <>
          <h2 style={{ fontWeight: "600", marginTop: "1.5em", marginBottom: "0.5em" }}>Skills</h2>
          <p>{resumeParams.skills.join(", ")}</p>
        </>
      )}

      {resumeParams.experience && (
        <>
          <h2 style={{ fontWeight: "600", marginTop: "1.5em", marginBottom: "0.5em" }}>Experience</h2>
          <p>{resumeParams.experience}</p>
        </>
      )}

      {resumeParams.education && (
        <>
          <h2 style={{ fontWeight: "600", marginTop: "1.5em", marginBottom: "0.5em" }}>Education</h2>
          <p>{resumeParams.education}</p>
        </>
      )}

      {resumeParams.achievements && (
        <>
          <h2 style={{ fontWeight: "600", marginTop: "1.5em", marginBottom: "0.5em" }}>Achievements</h2>
          <p>{resumeParams.achievements}</p>
        </>
      )}
    </div>
  );
};

export default ClassicTemplate;
