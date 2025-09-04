import React, { useEffect } from "react";
import { ResumeFormInputs } from "./ResumeForm";

import DefaultTemplate from "./templates/DefaultTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";

interface ResumePreviewProps {
  resumeParams: ResumeFormInputs | null;
  selectedTemplate: number;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeParams, selectedTemplate }) => {
  // Step 2 debug: Log whenever resumeParams or selectedTemplate changes to confirm updates
  useEffect(() => {
    console.log("ResumePreview updated - resumeParams:", resumeParams);
    console.log("ResumePreview updated - selectedTemplate:", selectedTemplate);
  }, [resumeParams, selectedTemplate]);

  if (!resumeParams) {
    return (
      <div
        className="resume-preview-content"
        style={{ color: "#bbb", textAlign: "center", paddingTop: 50 }}
      >
        <span style={{ fontSize: 60, display: "block", marginBottom: 20 }}>✨</span>
        Your resume will appear here after filling the form.
      </div>
    );
  }

  switch (selectedTemplate) {
    case 1:
      return <ModernTemplate resumeParams={resumeParams} />;
    case 2:
      return <ClassicTemplate resumeParams={resumeParams} />;
    default:
      return <DefaultTemplate resumeParams={resumeParams} />;
  }
};

export default ResumePreview;
