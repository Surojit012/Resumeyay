import React from "react";
const templates = [
  { id: 0, label: "Default" },
  { id: 1, label: "Modern" },
  { id: 2, label: "Classic" }
];
const TemplateChooser: React.FC<{ selected: number; setSelected: (id: number) => void }> = ({
  selected,
  setSelected
}) => (
  <>
    <div className="templates-title">Choose Your Template</div>
    <div className="templates">
      {templates.map((t) => (
        <div
          key={t.id}
          className={`template-card${selected === t.id ? " selected" : ""}`}
          onClick={() => setSelected(t.id)}
        >
          <div style={{ color: "#6f6f6f", fontSize: "2.25rem" }}>🗎</div>
          <div className="template-label">{t.label}</div>
        </div>
      ))}
    </div>
    <div className="load-more">Load more...</div>
  </>
);
export default TemplateChooser;
