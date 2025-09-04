import { useEffect, useState } from "react";
import BillingSystem from "../components/BillingSystem";
import NotesManager from "../components/NotesManager";
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
        <NotesManager notes={notes} setNotes={setNotes} />
      </section>
    </div>
  );
}
