"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Top: 3 columns */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Col 1: Business info */}
            <div className="text-sm text-gray-800">
              <p className="font-semibold mb-2">Plumber Farmingdale Ny</p>
              <p>
                Email:{" "}
                <Link href="mailto:plumberfarmingdaleny@gmail.com">
                  plumberfarmingdaleny@gmail.com
                </Link>
              </p>
              <p>
                Phone:
                <Link href="tel:+15162000815">(516) 200-0815</Link>
              </p>
              <p>
                Url:
                <br />
                <Link href="https://www.plumberfarmingdaleny.com/">
                  https://www.plumberfarmingdaleny.com/
                </Link>
              </p>
              <p className="mt-2">
                276 Staples St
                <br />
                Farmingdale, NY 11735
              </p>
            </div>

            {/* Col 2: Services list */}
            <div className="text-sm">
              <p className="font-semibold text-gray-900 mb-3">Services</p>
              <ul className="space-y-1 text-gray-800">
                <li>
                  <Link className="hover:underline" href="/drain-cleaning">
                    Drain Cleaning
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/sewer-line-repair">
                    Sewer Line Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/water-heater-repair">
                    Water Heater Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/sump-pump-repair">
                    Sump Pump Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/water-treatment">
                    Water Treatment
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/leak-repair">
                    Leak Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/gas-line-repair">
                    Gas Line Repair
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/septic-system-repair"
                  >
                    Septic System Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/faucet-repair">
                    Faucet Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/toilet-repair">
                    Toilet Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/sewer-clearing">
                    Sewer Clearing
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/water-line-repair">
                    Water Line Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/pipe-repair">
                    Pipe Repair
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/emergency">
                    Emergency
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/backflow-prevention-testing"
                  >
                    Backflow Prevention Testing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/garbage-disposal-repair"
                  >
                    Garbage Disposal Repair
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Site links */}
            <div className="text-sm">
              <ul className="space-y-1 text-gray-800">
                <li>
                  <Link className="hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/plumbing-services">
                    Plumbing Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/disclaimer">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/locations">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/locations/east-farmingdale"
                  >
                    East Farmingdale
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/locations/north-farmingdale"
                  >
                    North Farmingdale
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/locations/south-farmingdale"
                  >
                    South Farmingdale
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="/locations/west-farmingdale"
                  >
                    West Farmingdale
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-gray-300" />
      {/* Bottom bar */}
      <div className="bg-gray-100 ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-600 text-center">
            Copyright © {new Date().getFullYear()} Plumber Farmingdale Ny
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-red-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="hover:text-red-500"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter/X"
              className="hover:text-red-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
