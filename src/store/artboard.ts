import create from "zustand";

export const useArtboardStore = create((set) => ({
  resume: {
    basics: {
      name: "",
      headline: "",
      location: "",
      phone: "",
      email: "",
      url: { href: "" },
      customFields: [],
    },
    sections: {
      // initialize all sections as visible and empty
      summary: { visible: true, content: "", id: "summary", name: "Summary", columns: 1 },
      profiles: { visible: true, items: [], id: "profiles", name: "Profiles", columns: 1 },
      experience: { visible: true, items: [], id: "experience", name: "Experience", columns: 1 },
      education: { visible: true, items: [], id: "education", name: "Education", columns: 1 },
      skills: { visible: true, items: [], id: "skills", name: "Skills", columns: 1 },
      // Add other sections as needed
    },
  },

  setResumeParams: (params) => set((state) => ({
    resume: {
      ...state.resume,
      basics: {
        name: params.name || "",
        headline: params.role || "",
        location: params.address || "",
        phone: params.phone || "",
        email: params.email || "",
        url: { href: params.website || "" },
        customFields: [], // map extra custom fields here if any
      },
      sections: {
        ...state.resume.sections,
        summary: { ...state.resume.sections.summary, content: params.summary || "" },
        skills: { ...state.resume.sections.skills, items: params.skills.map((s) => ({ id: s, name: s, level: 0, description: "" })) },
        // Map other sections similarly (experience, education, etc.)
      }
    }
  }))
}));