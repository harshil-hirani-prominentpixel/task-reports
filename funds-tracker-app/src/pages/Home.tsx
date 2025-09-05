import { useEffect, useState } from "react";
import BillingSystem from "../components/BillingSystem";
import MoneyManager from "../components/MoneyManager";
import type { Notes } from "../types";
import { loadNotes, saveNotes } from "../utils/helper/storage";

export default function Home() {
  const [notes, setNotes] = useState<Notes>(() => loadNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <div className='layout'>
      <section className='leftPane'>
        <BillingSystem notes={notes} setNotes={setNotes} />
      </section>

      <section className='rightPane'>
        <MoneyManager notes={notes} setNotes={setNotes} />
      </section>
    </div>
  );
}
