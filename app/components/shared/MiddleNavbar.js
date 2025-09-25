"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiMiniBars3,
  HiMiniXMark,
  HiMiniChevronDown,
  HiMiniChevronRight,
} from "react-icons/hi2";
import Image from "next/image";
// Helper: join class names
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  // Mobile menu + mobile dropdown states
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [mobileRepairOpen, setMobileRepairOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileRepairOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full lg:mt-5  bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-7xl   mx-auto px-2  xs:px-3 sm:px-4  lg:px-4">
        {/* Desktop / Tablet bar */}
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            >
              <Image
                src="/images/logo/logo1.png"
                alt="Logo"
                width={291}
                height={49}
              />
            </Link>
          </div>

          {/* Middle: Links (desktop). Hidden on mobile */}
          <div className="pointer-events-auto hidden lg:flex   md:hidden absolute left-1/2 -translate-x-1/2 items-center gap-1 lg:gap-2  xl:gap-3">
            {/* Home */}
            <TopLink href="/" label="Home" />

            {/* About (hover dropdown on desktop; click goes to /about) */}
            <div className="relative group">
              <TopLink href="/about" label="About" hasDropdown />
              {/* Dropdown */}
              <div className="invisible absolute left-0 top-full mt-2 w-56 bg-white p-2 shadow-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <DropdownLink href="/about/testimonials" label="Testimonials" />
                <DropdownLink href="/about/gallery" label="Gallery" />
              </div>
            </div>

            {/* Plumbing Services (hover dropdown + nested dropdown). Click goes to /plumbing-services */}
            <div className="relative group">
              <TopLink
                href="/plumbing-services"
                label="Plumbing Services"
                hasDropdown
              />
              <div className="invisible absolute left-0 top-full mt-2 w-64  bg-white p-2 shadow-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {/* Repair with nested submenu */}
                <div className="relative group/repair">
                  <DropdownLink href="/repair" label="Repair" hasChevronRight />
                  <DropdownLink href="/drain cleaning" label="Drain Cleaning" />
                  <DropdownLink
                    href="/backflow-prevention-testing"
                    label="Backflow Prevention Testing"
                  />
                  <DropdownLink href="/emergency" label="Emergency" />
                  <DropdownLink
                    href="/water-treatment"
                    label="Water Treatment"
                  />
                  <DropdownLink href="/sewer-clearing" label="Sewer Clearing" />
                  {/* Nested submenu (Lake Repair) */}
                  <div className="invisible absolute left-full top-0 ml-2 w-56   bg-white p-2 shadow-lg opacity-0 transition-all duration-150 group-hover/repair:visible group-hover/repair:opacity-100">
                    <DropdownLink href="/lake-repair" label="Lake Repair" />
                    <DropdownLink
                      href="/gas-line-repair"
                      label="Gas Line Repair"
                    />
                    <DropdownLink
                      href="/sewer-line-repair"
                      label="Sewer Line Repair"
                    />
                    <DropdownLink
                      href="/sump-pupm-repair"
                      label="Sump Pump Repair"
                    />
                    <DropdownLink
                      href="/water-heater-repair"
                      label="Water Heater Repair"
                    />
                    <DropdownLink
                      href="/septic-system-repair"
                      label="Septic System Repair"
                    />
                    <DropdownLink href="/faucet-repair" label="Faucet Repair" />
                    <DropdownLink href="/toilet-repair" label="Toilet Repair" />
                    <DropdownLink
                      href="/water-line-repair"
                      label="Water Line Repair"
                    />
                    <DropdownLink href="/pipe-repair" label="Pipe Repair" />
                  </div>
                </div>
              </div>
            </div>
            <TopLink href="/contact" label="Contact" />
            <TopLink href="/blog" label="Blog" />
            {/* Locations (hover dropdown on desktop; click goes to /locations) */}
            <div className="relative group">
              <TopLink href="/locations" label="Locations" hasDropdown />
              {/* Dropdown */}
              <div className="invisible absolute left-0 top-full mt-2 w-56   bg-white p-2 shadow-lg opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <DropdownLink
                  href="/locations/east-farmingdale"
                  label="East Farmingdale"
                />
                <DropdownLink
                  href="/locations/north-farmingdale"
                  label="North Farmingdale"
                />
                <DropdownLink
                  href="/locations/south-farmingdale"
                  label="South Farmingdale"
                />
                <DropdownLink
                  href="/locations/west-farmingdale"
                  label="West Farmingdale"
                />
              </div>
            </div>
          </div>

          {/* Right: Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 hover:bg-gray-100"
            >
              <Hamburger open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div>
            {/* <div className="md:hidden border-t py-2"> */}
            <MobileItem href="/" label="Home" />

            {/* About (click to navigate; chevron to expand) */}
            <MobileParent
              label="About"
              href="/about"
              open={mobileAboutOpen}
              onToggle={() => setMobileAboutOpen((v) => !v)}
            >
              <MobileChild href="/testimonials" label="Testimonials" />
              <MobileChild href="/gallery" label="Gallery" />
            </MobileParent>

            {/* Plumbing Services */}
            <MobileParent
              label="Plumbing Services"
              href="/plumbing-services"
              open={mobileServicesOpen}
              onToggle={() => setMobileServicesOpen((v) => !v)}
            >
              <MobileParent
                isNested
                label="Repair"
                href="/repair"
                open={mobileRepairOpen}
                onToggle={() => setMobileRepairOpen((v) => !v)}
              >
                <MobileChild href="/lake-repair" label="Lake Repair" />
                <MobileChild href="/gas-line-repair" label="Gas Line Repair" />
                <MobileChild
                  href="/sewer-line-repair"
                  label="Sewer Line Repair"
                />
                <MobileChild
                  href="/sump-pupm-repair"
                  label="Sump Pupm Repair"
                />
                <MobileChild
                  href="/water-heater-repair"
                  label="Water Heater Repair"
                />
                <MobileChild
                  href="/septic-system-repair"
                  label="Septic System Repair"
                />
                <MobileChild href="/faucet-repair" label="Faucet Repair" />
                <MobileChild href="/toilet-repair" label="Toilet Repair" />
                <MobileChild
                  href="/water-line-repair"
                  label="Water Line Repair"
                />
                <MobileChild href="/pipe-repair" label="Pipe Repair" />
              </MobileParent>
              <MobileChild href="/drain-cleaning" label="Drain Cleaning" />
              <MobileChild
                href="/backflow-preventation-testing"
                label="Backflow Preventation Testing"
              />
              <MobileChild href="/emergency" label="Emergency" />
              <MobileChild href="/water-treatment" label="Water Treatment" />
              <MobileChild href="/sewer-clearing" label="Sewer Clearing" />
            </MobileParent>
            {/* Locations (click to navigate; chevron to expand) */}
            <MobileParent
              label="Locations"
              href="/locations"
              open={mobileAboutOpen}
              onToggle={() => setMobileAboutOpen((v) => !v)}
            >
              <MobileChild
                href="/locations/east-farmingdale"
                label="East Farmingdale"
              />
              <MobileChild
                href="/locations/north-farmingdale"
                label="North Farmingdale"
              />
              <MobileChild
                href="/locations/south-farmingdale"
                label="South Farmingdale"
              />
              <MobileChild
                href="/locations/west-farmingdale"
                label="West Farmingdale"
              />
            </MobileParent>
          </div>
        )}
      </nav>
    </header>
  );
}

function TopLink({ href, label, hasDropdown }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center gap-1 rounded-xl    px-3 py-2   text-sm font-medium transition-colors",
        active ? "text-blue-500  " : "text-gray-700 hover:text-blue-500   "
      )}
    >
      <span>{label}</span>
      {hasDropdown && <HiMiniChevronDown aria-hidden className="h-4 w-4" />}
    </Link>
  );
}

function DropdownLink({ href, label, hasChevronRight }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700   hover:text-blue-500 "
    >
      <span>{label}</span>
      {hasChevronRight && (
        <HiMiniChevronRight aria-hidden className="h-4 w-4" />
      )}
    </Link>
  );
}

function MobileItem({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cx(
        "block rounded-xl px-3 py-2 text-base",
        active ? "  text-blue-500 " : "text-gray-800   hover:text-blue-500 "
      )}
    >
      {label}
    </Link>
  );
}

function MobileParent({ label, href, open, onToggle, isNested, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <div className={cx("", isNested && "ml-3 border-l pl-3")}>
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className={cx(
            "flex-1 rounded-xl px-3 py-2 text-base",
            active ? "text-blue-500 " : "text-gray-800  hover:text-blue-500 "
          )}
        >
          {label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`Toggle ${label} submenu`}
          onClick={onToggle}
          className="mr-2 inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <HiMiniChevronDown
            aria-hidden
            className={cx("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
      </div>
      {open && <div className="mt-1 space-y-1">{children}</div>}
    </div>
  );
}

function MobileChild({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cx(
        "block rounded-xl px-3 py-2 text-base ml-6",
        active ? "  text-blue-500 " : "text-gray-700   hover:text-blue-500 "
      )}
    >
      {label}
    </Link>
  );
}

function Hamburger({ open }) {
  return (
    <span className="inline-flex">
      {open ? (
        <HiMiniXMark className="h-6 w-6" aria-hidden />
      ) : (
        <HiMiniBars3 className="h-6 w-6" aria-hidden />
      )}
    </span>
  );
}
