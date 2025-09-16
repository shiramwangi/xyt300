import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, User } from 'lucide-react';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-secondary-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary-600">Portfolio</div>
        </div>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 rounded-full bg-secondary-100 px-3 py-2 text-sm hover:bg-secondary-200 transition-colors">
            <User className="h-5 w-5 text-secondary-600" />
            <span className="text-secondary-900">John Doe</span>
            <ChevronDown className="h-4 w-4 text-secondary-600" />
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
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#profile"
                      className={cn(
                        active ? 'bg-secondary-50' : '',
                        'block px-4 py-2 text-sm text-secondary-700',
                      )}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#settings"
                      className={cn(
                        active ? 'bg-secondary-50' : '',
                        'block px-4 py-2 text-sm text-secondary-700',
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#logout"
                      className={cn(
                        active ? 'bg-secondary-50' : '',
                        'block px-4 py-2 text-sm text-red-600',
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
