import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="heading-1 text-secondary-900">
            Hi, I'm <span className="text-primary-600">Your Name</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            A passionate developer crafting beautiful and functional web experiences.
            I specialize in building modern web applications with cutting-edge technologies.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#projects"
              className="btn btn-primary px-6 py-3"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary px-6 py-3"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative w-[40rem] h-[30rem] rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
} 