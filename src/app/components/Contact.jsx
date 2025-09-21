import Natali from "@/../public/assets/people/natali.png"
import Drew from "@/../public/assets/people/drew.png"
import Orlando from "@/../public/assets/people/orlando.png"
import Andi from "@/../public/assets/people/andi.png"
import Kate from "@/../public/assets/people/kate.png"
import Koray from "@/../public/assets/people/koray.png"
import Image from "next/image"

export function Contact() {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-6">Contacts</h4>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <Image src={Natali} alt="Natali Craig" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Natali Craig</p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <Image src={Drew} alt="Drew Cano" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Drew Cano</p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <Image src={Orlando} alt="Orlando Diggs" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Orlando Diggs</p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <Image src={Andi} alt="Andi Lane" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Andi Lane</p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <Image src={Kate} alt="Kate Morrison" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Kate Morrison</p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <Image src={Koray} alt="Koray Okumus" className="w-6 h-6 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Koray Okumus</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
