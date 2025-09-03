import type { Notes } from "../../types";

const KEY = "funds-tracker-notes";

export function loadNotes(): Notes {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, number>;
    const normalized: Notes = {};
    Object.entries(parsed).forEach(([k, v]) => {
      const n = Number(k);
      if (Number.isFinite(n) && Number.isFinite(v) && v > 0) normalized[n] = v;
    });
    return normalized;
  } catch {
    return {};
  }
}

export function saveNotes(notes: Notes) {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes));
  } catch {
    console.log("Please try again!, Not save the notes.");
  }
}
