'use client'
import React from 'react'
import Typed from 'typed.js'


export default function TypedBios({ isDark }: { isDark?: boolean }) {
  let el = React.useRef(null)
  let typed = React.useRef<Typed | null>(null)

   React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      cursorChar: '_',
    })
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    }
  }, [])

  return (
    <>
      <ul id="bios" className="hidden">
        <li>Based in Indonesia.</li>
        <li>Testing out exploits in online games as part of research.</li>
        <li>Peak Ascendant III rank in VALORANT.</li>
      </ul>
      <span className="select-none text-2xl !text-black dark:!text-gray-100">
        <span ref={el} />
      </span>
    </>
  )
}