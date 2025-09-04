import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Header from "./components/Header";
import ResumeForm, { ResumeFormInputs } from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import TemplateChooser from "./components/TemplateChooser";

import "./App.css";

const App: React.FC = () => {
  const [resumeParams, setResumeParams] = useState<ResumeFormInputs | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<number>(0);
  const [loadingSummary, setLoadingSummary] = useState<boolean>(false);
  const [errorSummary, setErrorSummary] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_DOBBY_API_KEY;

  async function generateSummaryFromAPI(inputs: ResumeFormInputs): Promise<string> {
    const userMessage = {
      role: "user",
      content: `Write a professional, engaging resume summary paragraph for a candidate applying for the role of "${inputs.role}" in the "${inputs.industry}" industry. 
Include the following skills: ${inputs.skills.join(", ")}. 
Summarize their experience: ${inputs.experience}. 
Mention achievements: ${inputs.achievements}. 
Use a ${inputs.tone.toLowerCase()} tone. 
Do not list items or use headings. Write as a cohesive, well-structured paragraph suitable for a resume summary or LinkedIn about section.`
    };

    try {
      const response = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "accounts/sentientfoundation-serverless/models/dobby-mini-unhinged-plus-llama-3-1-8b",
          max_tokens: 4096,
          top_p: 1,
          top_k: 40,
          presence_penalty: 0,
          frequency_penalty: 0,
          temperature: 0.6,
          messages: [userMessage],
        }),
      });

      const data = await response.json();
      return data.choices?.[0]?.message?.content?.trim() ?? "Summary unavailable";
    } catch (error) {
      console.error("Error generating summary from API:", error);
      setErrorSummary("Failed to generate summary. Please try again.");
      return "Failed to generate summary.";
    }
  }

  async function handleGenerate(inputs: ResumeFormInputs) {
    setLoadingSummary(true);
    setErrorSummary(null);

    const summary = await generateSummaryFromAPI(inputs);

    setResumeParams({ ...inputs, summary });
    setLoadingSummary(false);
  }

  function handleDownload() {
    const element = document.getElementById("resume-preview-to-download");
    if (!element) return;

    html2canvas(element).then((canvas) => {
      // Download JPG
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "resume.jpg";
          link.click();
        }
      }, "image/jpeg", 1);

      // Download PDF
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF({ unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-layout">
        <section className="left-panel">
          <h2 className="form-header">Fill the Parameters</h2>
          <div className="form-content">
            <ResumeForm onGenerate={handleGenerate} />
            {loadingSummary && (
              <p style={{ color: "#9cffb9", marginTop: 10, fontWeight: "600" }}>
                Generating summary...
              </p>
            )}
            {errorSummary && (
              <p style={{ color: "#ff7373", marginTop: 10, fontWeight: "600" }}>
                {errorSummary}
              </p>
            )}
          </div>
        </section>

        <section className="right-panel">
          {resumeParams ? (
            <>
              <ResumePreview resumeParams={resumeParams} />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 24,
                }}
              >
                <button className="generate-btn" onClick={handleDownload}>
                  Download Resume (PDF/JPG)
                </button>
              </div>
            </>
          ) : (
            <ResumePreview resumeParams={null} />
          )}
        </section>
      </main>

      <section className="templates-section">
        <TemplateChooser
          selected={selectedTemplate}
          setSelected={setSelectedTemplate}
        />
      </section>

      <div className="built-by-gradient">Built by surojitpvt</div>
    </div>
  );
};

export default App;

