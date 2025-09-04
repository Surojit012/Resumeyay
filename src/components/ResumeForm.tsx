import React, { useState } from "react";

export interface ResumeFormInputs {
  name: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  nationality: string;
  skills: string[];
  languages: string[];
  summary: string;
  experience: string;
  achievements: string;
  education: string;
  tone: string;
  industry: string;
}

const allSkills = [
  "data analysis",
  "communication",
  "creativity",
  "problem solving",
  "public speaking",
];

const allLanguages = ["English", "French", "Spanish", "German", "Mandarin"];

const toneOptions = [
  "Default",
  "Professional",
  "Friendly",
  "Confident",
  "Persuasive",
  "Concise",
];

const ResumeForm: React.FC<{ onGenerate: (inputs: ResumeFormInputs) => void }> = ({
  onGenerate,
}) => {
  const [inputs, setInputs] = useState<ResumeFormInputs>({
    name: "",
    role: "",
    address: "",
    phone: "",
    email: "",
    nationality: "",
    skills: [],
    languages: [],
    summary: "",
    experience: "",
    achievements: "",
    education: "",
    tone: "Default",
    industry: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleSkillAdd(skill: string) {
    if (!inputs.skills.includes(skill)) {
      setInputs((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  }

  function handleSkillRemove(skill: string) {
    setInputs((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  }

  function handleLanguageAdd(lang: string) {
    if (!inputs.languages.includes(lang)) {
      setInputs((prev) => ({ ...prev, languages: [...prev.languages, lang] }));
    }
  }

  function handleLanguageRemove(lang: string) {
    setInputs((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l !== lang),
    }));
  }

  function handleCustomSkill(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      e.preventDefault();
      handleSkillAdd(e.currentTarget.value.trim());
      e.currentTarget.value = "";
    }
  }

  function handleCustomLanguage(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      e.preventDefault();
      handleLanguageAdd(e.currentTarget.value.trim());
      e.currentTarget.value = "";
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onGenerate(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">1. Full Name</label>
      <input
        className="form-input"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Your full name"
        required
      />

      <label className="form-label">2. Job Title / Role</label>
      <input
        className="form-input"
        name="role"
        value={inputs.role}
        onChange={handleChange}
        placeholder="What is the role or job title you're aiming for?"
        required
      />

      <label className="form-label">3. Address</label>
      <input
        className="form-input"
        name="address"
        value={inputs.address}
        onChange={handleChange}
        placeholder="Street, City, State, Zip"
      />

      <label className="form-label">4. Phone</label>
      <input
        className="form-input"
        name="phone"
        value={inputs.phone}
        onChange={handleChange}
        placeholder="Your phone number"
      />

      <label className="form-label">5. Email</label>
      <input
        className="form-input"
        name="email"
        type="email"
        value={inputs.email}
        onChange={handleChange}
        placeholder="Your email address"
      />

      <label className="form-label">6. Nationality</label>
      <input
        className="form-input"
        name="nationality"
        value={inputs.nationality}
        onChange={handleChange}
        placeholder="Your nationality"
      />

      <label className="form-label">7. Skills</label>
      <div className="skills-box">
        {inputs.skills.map((skill) => (
          <span className="skill-tag selected" key={skill}>
            {skill}
            <span className="remove-x" onClick={() => handleSkillRemove(skill)}>
              &times;
            </span>
          </span>
        ))}
        <input
          className="form-input"
          style={{
            width: "120px",
            minWidth: "55px",
            fontSize: "0.92rem",
            background: "#e5efea",
            marginBottom: 0,
            marginLeft: 0,
            border: "none",
            boxShadow: "none",
          }}
          placeholder="Add skill..."
          onKeyDown={handleCustomSkill}
        />
      </div>
      <div className="available-skills">
        {allSkills
          .filter((skill) => !inputs.skills.includes(skill))
          .map((skill) => (
            <span key={skill} className="skill-tag" onClick={() => handleSkillAdd(skill)}>
              {skill}
            </span>
          ))}
      </div>

      <label className="form-label">8. Languages</label>
      <div className="skills-box">
        {inputs.languages.map((lang) => (
          <span className="skill-tag selected" key={lang}>
            {lang}
            <span className="remove-x" onClick={() => handleLanguageRemove(lang)}>
              &times;
            </span>
          </span>
        ))}
        <input
          className="form-input"
          style={{
            width: "120px",
            minWidth: "55px",
            fontSize: "0.92rem",
            background: "#e5efea",
            marginBottom: 0,
            marginLeft: 0,
            border: "none",
            boxShadow: "none",
          }}
          placeholder="Add language..."
          onKeyDown={handleCustomLanguage}
        />
      </div>
      <div className="available-skills">
        {allLanguages
          .filter((lang) => !inputs.languages.includes(lang))
          .map((lang) => (
            <span key={lang} className="skill-tag" onClick={() => handleLanguageAdd(lang)}>
              {lang}
            </span>
          ))}
      </div>

      <label className="form-label">9. Major Achievements</label>
      <input
        className="form-input"
        name="achievements"
        value={inputs.achievements}
        onChange={handleChange}
        placeholder="Share your top results"
      />

      <label className="form-label">10. Education</label>
      <input
        className="form-input"
        name="education"
        value={inputs.education}
        onChange={handleChange}
        placeholder="Your qualifications and institutions"
      />

      <label className="form-label">11. Preferred Tone</label>
      <select className="form-select" name="tone" value={inputs.tone} onChange={handleChange}>
        {toneOptions.map((tone) => (
          <option value={tone} key={tone}>
            {tone}
          </option>
        ))}
      </select>

      <label className="form-label">12. Target Industry (Optional)</label>
      <input
        className="form-input"
        name="industry"
        value={inputs.industry}
        onChange={handleChange}
        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        placeholder="Is your resume for a specific industry? (e.g. Tech, Finance)"
      />

      <label className="form-label">13. Summary Statement (Optional)</label>
      <input
        className="form-input"
        name="summary"
        value={inputs.summary}
        onChange={handleChange}
        placeholder="Generate a summary / about me paragraph"
      />

      <button className="generate-btn" type="submit">
        Generate
      </button>
    </form>
  );
};

export default ResumeForm;
