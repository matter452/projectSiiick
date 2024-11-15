'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

function DropdownItem({ item })
{
    return <MenuItem>
    
    </MenuItem>
}
const list = [
    { id: 1, val: 'small' },
    { id: 2, val: 'medium' },
    { id: 3, val: 'large' },
    { id: 4, val: 'x-large' },
    { id: 5, val: '2x-large' },
  ]
export default function Dropdown({name, list}) {
   const [selected, setSelected] = useState(list[1])

  return (
    <div className="block">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative block w-2/3 rounded-lg bg-white py-1.5 pr-8 pl-3 text-left text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
          )}
        >
          {selected.val}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-black/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {list.map((item) => (
            <ListboxOption
              key={item.val}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
              <div className="text-sm/6 text-black">{item.val}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}