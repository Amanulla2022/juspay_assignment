import {
  BugAntIcon,
  UserPlusIcon,
  SignalIcon,
} from "@heroicons/react/24/outline"

export function Notification() {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-6">Notifications</h4>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E3F5FF]">
            <BugAntIcon className="w-4 h-4 text-black" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">You have a bug that needs...</p>
            <span className="text-xs text-neutral-400">Just now</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E3F5FF]">
            <UserPlusIcon className="w-4 h-4 text-black" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">New user registered</p>
            <span className="text-xs text-neutral-400">59 minutes ago</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E3F5FF]">
            <BugAntIcon className="w-4 h-4 text-black" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">You have a bug that needs...</p>
            <span className="text-xs text-neutral-400">12 hours ago</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E3F5FF]">
            <SignalIcon className="w-4 h-4 text-black" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Andi Lane subscribed to you</p>
            <span className="text-xs text-neutral-400">Today, 11:59 AM</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
