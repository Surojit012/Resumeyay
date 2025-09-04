import React from "react";

const templates = [
  { id: 0, label: "Default", thumbnail: "/templates/default.png" },
  { id: 1, label: "Modern", thumbnail: "/templates/modern.png" },
  { id: 2, label: "Classic", thumbnail: "/templates/classic.png" }
];

const TemplateChooser: React.FC<{
  selected: number;
  setSelected: (id: number) => void;
}> = ({ selected, setSelected }) => (
  <>
    <div
      className="templates-title"
      style={{ fontWeight: "bold", fontSize: "1.3rem", marginBottom: 12 }}
    >
      Choose Your Template
    </div>
    <div
      className="templates"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 16,
      }}
      role="list"
    >
      {templates.map((t) => (
        <div
          key={t.id}
          className={`template-card${selected === t.id ? " selected" : ""}`}
          onClick={() => {
            console.log("Template selected:", t.id);
            setSelected(t.id);
          }}
          tabIndex={0}
          role="listitem"
          aria-selected={selected === t.id}
          aria-label={`Select ${t.label} template`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              console.log("Template selected via keyboard:", t.id);
              setSelected(t.id);
            }
          }}
          style={{
            cursor: "pointer",
            border: selected === t.id ? "3px solid #4caf50" : "1px solid #ccc",
            borderRadius: 8,
            padding: 8,
            maxWidth: 130,
            textAlign: "center",
            userSelect: "none",
            boxShadow: selected === t.id ? "0 0 10px #4caf50" : "none",
            outline: "none",
          }}
        >
          <img
            src={t.thumbnail}
            alt={`${t.label} template preview`}
            style={{ width: "100%", height: "auto", borderRadius: 6, marginBottom: 8 }}
            loading="lazy"
            draggable={false}
          />
          <div
            className="template-label"
            style={{ fontWeight: "600", color: selected === t.id ? "#4caf50" : "#333" }}
          >
            {t.label}
          </div>
        </div>
      ))}
    </div>
    <div
      className="load-more"
      style={{
        marginTop: 20,
        color: "#666",
        cursor: "pointer",
        textAlign: "center",
        fontStyle: "italic",
        userSelect: "none",
      }}
    >
      Load more...
    </div>
  </>
);

export default TemplateChooser;
