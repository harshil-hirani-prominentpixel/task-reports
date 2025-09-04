import { useState } from "react";
import { withdrawAmount } from "../utils/helper/withdrawHelper";
import type { Notes } from "../types";

interface Props {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
}

export default function BillingSystem({ notes, setNotes }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [givenAmount, setGivenAmount] = useState<number | "">("");
  const [billAmount, setBillAmount] = useState<number | "">("");

  const [finalResult, setFinalResult] = useState<{
    withdrawn: Notes;
    remaining: number;
  }>();

  const handleSettlement = () => {
    const given = Number(givenAmount);
    const bill = Number(billAmount);

    if (
      !Number.isFinite(given) ||
      !Number.isFinite(bill) ||
      given <= 0 ||
      bill < 0
    ) {
      alert("Enter valid numeric values.");
      return;
    }

    const change = given - bill;

    if (change < 0) {
      alert("Insufficient amount from customer.");
      return;
    }

    if (change === 0) {
      const updated = { ...notes };
      updated[given] = (updated[given] || 0) + 1;
      setNotes(updated);
      setFinalResult({ withdrawn: {}, remaining: 0 });
      return;
    }

    const { withdrawn, remaining } = withdrawAmount(change, notes);

    if (remaining > 0) {
      alert("Cannot return exact change with available notes.");
      return;
    }

    const updated = { ...notes };

    updated[given] = (updated[given] || 0) + 1;

    Object.entries(withdrawn).forEach(([n, q]) => {
      const key = Number(n);
      updated[key] = Math.max(0, (updated[key] || 0) - q);
      if (updated[key] === 0) {
        delete updated[key];
      }
    });

    setNotes(updated);
    setFinalResult({ withdrawn, remaining: 0 });
  };

  return (
    <div className='card'>
      <h2 className='title'>Billing System</h2>

      <button className='btn primary' onClick={() => setShowForm((s) => !s)}>
        {showForm ? "Close" : "Bill"}
      </button>

      {showForm && (
        <div className='stack'>
          <div className='formRow'>
            <input
              className='input'
              type='number'
              placeholder='Amount given by customer'
              value={givenAmount}
              onChange={(e) =>
                setGivenAmount(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
            />
            <input
              className='input'
              type='number'
              placeholder='Bill amount'
              value={billAmount}
              onChange={(e) =>
                setBillAmount(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
            />
            <button className='btn success' onClick={handleSettlement}>
              Settlement
            </button>
          </div>

          {finalResult && (
            <div className='result'>
              <h3 className='subtitle'>Withdrawn Notes</h3>
              {Object.keys(finalResult.withdrawn).length === 0 ? (
                <p className='muted'>No notes withdrawn.</p>
              ) : (
                <ul className='list'>
                  {Object.entries(finalResult.withdrawn).map(([note, qty]) => (
                    <li key={note} className='listItem'>
                      <span>₹{note}</span>
                      <span>× {qty}</span>
                      <span>= ₹{Number(note) * qty}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className='totalRow'>
                <span>Remaining (not withdrawable)</span>
                <strong>₹{finalResult.remaining}</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
