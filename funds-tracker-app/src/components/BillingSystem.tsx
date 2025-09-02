import { useState } from "react";
import { withdrawAmount } from "../utils/helper/withdrawHelper";
import { type Notes } from "../types";

interface Props {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
}

export default function BillingSystem({ notes, setNotes }: Props) {
  const [showForm, setShowForm] = useState(false);

  const [givenAmount, setGivenAmount] = useState<number | "">("");
  const [billAmount, setBillAmount] = useState<number | "">("");

  const [pendingResult, setPendingResult] = useState<{
    withdrawn: Notes;
    remaining: number;
  }>();

  const [finalResult, setFinalResult] = useState<{
    withdrawn: Notes;
    remaining: number;
  }>();

  const handleCalculate = () => {
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

    const updatedNotes = {
      ...notes,
      [given]: (notes[given] || 0) + 1,
    };
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    const { withdrawn, remaining } = withdrawAmount(change, updatedNotes);

    if (remaining > 0) {
      console.warn("Not enough notes to cover full change.");
    }

    setPendingResult({ withdrawn, remaining });
    setFinalResult(undefined);
  };

  const handleSettlement = () => {
    if (!pendingResult) {
      alert("Please click Calculate first.");
      return;
    }

    const updated = { ...notes };
    Object.entries(pendingResult.withdrawn).forEach(([n, q]) => {
      const key = Number(n);
      updated[key] = Math.max(0, (updated[key] || 0) - q);
    });

    setNotes(updated);
    setFinalResult(pendingResult);
    setPendingResult(undefined);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  const hasPending =
    pendingResult && Object.values(pendingResult.withdrawn).some((q) => q > 0);

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
            <button className='btn accent' onClick={handleCalculate}>
              Calculate
            </button>
          </div>

          <div className='blankBox' aria-hidden='true'></div>

          <button
            className='btn success'
            onClick={handleSettlement}
            disabled={!hasPending}
            title={!hasPending ? "Calculate first" : "Apply and show notes"}
          >
            Settlement
          </button>

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
