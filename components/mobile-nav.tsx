"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <div className="mobile-navigation" onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}>
    <button ref={button} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="mobile-navigation-links" aria-label="Mobile navigation" hidden={!open}>
      {[["Home", "/"], ["About", "/#about"], ["Experience", "/#experience"], ["Insights", "/blog"], ["Contact", "mailto:faithnte08@gmail.com"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </div>;
}
