import { Button } from '@headlessui/react'

export default function MyButton({text, doFunc}) {
  return (
    <Button className="rounded m-2 bg-slate-900 py-2 px-4 text-md text-white font-black data-[hover]:bg-slate-500 data-[active]:bg-slate-700" onClick={doFunc}>
      {text}
    </Button>
  )
}