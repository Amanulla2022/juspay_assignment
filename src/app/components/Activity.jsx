import BugImg from "@/../public/assets/activities/first.png"
import RocketImg from "@/../public/assets/activities/second.png"
import SubmitBugImg from "@/../public/assets/activities/third.png"
import EditImg from "@/../public/assets/activities/forth.png"
import TrashImg from "@/../public/assets/activities/fifth.png"
import Image from "next/image"

export function Activity() {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-6">Activities</h4>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={BugImg} alt="Bug" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">You have a bug that needs...</p>
            <span className="text-xs text-neutral-400">Just now</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={RocketImg} alt="Release" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Released a new version</p>
            <span className="text-xs text-neutral-400">59 minutes ago</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={SubmitBugImg} alt="Bug submitted" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Submitted a bug</p>
            <span className="text-xs text-neutral-400">12 hours ago</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={EditImg} alt="Edit" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Modified A data in Page X</p>
            <span className="text-xs text-neutral-400">Today, 11:59 AM</span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={TrashImg} alt="Deleted" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Deleted a page in Project X</p>
            <span className="text-xs text-neutral-400">Feb 2, 2023</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
