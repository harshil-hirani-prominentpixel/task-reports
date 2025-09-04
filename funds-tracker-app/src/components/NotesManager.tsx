import { useMemo, useState } from "react";
import type { Notes } from "../types";

interface Props {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
}

export default function NotesManager({ notes, setNotes }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [noteValue, setNoteValue] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");

  const total = useMemo(
    () =>
      Object.entries(notes).reduce(
        (acc, [note, qty]) => acc + Number(note) * qty,
        0
      ),
    [notes]
  );

  const handleAdd = () => {
    const nv = Number(noteValue);
    const q = Number(quantity);

    if (!nv || nv <= 0 || !Number.isFinite(nv)) {
      alert("Enter a valid note value (e.g., 10, 20, 50).");
      return;
    }
    if (!q || q <= 0 || !Number.isInteger(q)) {
      alert("Enter a valid quantity (positive integer).");
      return;
    }

    setNotes((prev) => ({
      ...prev,
      [nv]: (prev[nv] || 0) + q,
    }));

    setNoteValue("");
    setQuantity("");
    setShowForm(false);
  };

  const handleIncrement = (note: number) => {
    setNotes((prev) => ({
      ...prev,
      [note]: (prev[note] || 0) + 1,
    }));
  };

  const handleDecrement = (note: number) => {
    setNotes((prev) => {
      const updated = { ...prev };
      if (updated[note] > 1) {
        updated[note] -= 1;
      } else {
        delete updated[note]; 
      }
      return updated;
    });
  };

  const handleRemove = (note: number) => {
    const updated = { ...notes };
    delete updated[note];
    setNotes(updated);
  };

  const sorted = Object.keys(notes)
    .map(Number)
    .sort((a, b) => b - a); 

  return (
    <div className='card'>
      <h2 className='title'>Notes Manager</h2>

      <button className='btn primary' onClick={() => setShowForm((s) => !s)}>
        {showForm ? "Close" : "Add Notes"}
      </button>

      {showForm && (
        <div className='formRow'>
          <input
            className='input'
            type='number'
            placeholder='Note Value (e.g., 10)'
            value={noteValue}
            onChange={(e) =>
              setNoteValue(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <input
            className='input'
            type='number'
            placeholder='Quantity'
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <button className='btn success' onClick={handleAdd}>
            Save
          </button>
        </div>
      )}

      <h3 className='subtitle'>All Notes & Quantities</h3>
      {sorted.length === 0 ? (
        <p className='muted'>No notes yet. Click “Add Notes”.</p>
      ) : (
        <ul className='list'>
          {sorted.map((n) => (
            <li key={n} className='listItem'>
              <span>₹{n}</span>
              <span>× {notes[n]}</span>
              <span>= ₹{n * notes[n]}</span>
              <div className='actions'>
                <button
                  className='btn small success'
                  onClick={() => handleIncrement(n)}
                >
                  +
                </button>
                <button
                  className='btn small warning'
                  onClick={() => handleDecrement(n)}
                >
                  –
                </button>
                <button
                  className='btn small danger'
                  onClick={() => handleRemove(n)}
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className='totalRow'>
        <span>Grand Total</span>
        <strong>₹{total}</strong>
      </div>
    </div>
  );
}
