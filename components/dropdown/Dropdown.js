import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RiArrowDropDownLine } from "react-icons/ri";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function DropDown({ trigger, items = [], text }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex relative justify-center items-center gap-3 text-black font-semibold hover:text-blue-500">
        {trigger}
        <RiArrowDropDownLine />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" aria-label="Notification items">
            {!!items.length && items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-semibold hover:text-blue-400'
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
