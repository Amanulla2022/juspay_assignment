import { Activity } from "./Activity";
import { Contact } from "./Contact";
import { Notification } from "./Notification";

export default function RightPanel(){
  return (
    <aside className="hidden xl:block w-72 bg-[var(--surface)] border-l border-neutral-200 dark:border-neutral-800 p-4">
      <Notification />
      <Activity />
      <Contact />
    </aside>
  )
}
