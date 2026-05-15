"use client";
import React from "react";
import { redirect } from "../../utilities/utils";

export default function OfferAcceleration() {
  return (
    <section id="offer-acceleration" className="m-0 py-14 lg:py-20">
      <div className="padding-container max-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="poppins uppercase tracking-widest text-sm font-medium mb-4"
            style={{ color: "#A3A3A3" }}
          >
            For Talent · Coaching Program
          </p>
          <h1 className="poppins leading-none text-indigo-950 font-extrabold lg:leading-tight mb-6">
            Senior in skills. Stuck in offers.
          </h1>
          <p className="poppins text-gray-500 max-w-3xl mx-auto">
            Offer Acceleration is an 8-session program for senior LATAM
            professionals who already have the skills, but need the strategy,
            the network, and the criteria to land an offer at a US startup that
            actually matters.
          </p>
        </div>

        {/* Blocks */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Block 1 — Who it's for */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              You&apos;re the right fit if:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You have 5+ years of experience and consistent results
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You&apos;ve applied to US roles and either get filtered out or
                  get offers below your level
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You know the technical bar isn&apos;t your problem, getting in
                  front of the right founders is
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You&apos;re ready to build career strategy, not just send more
                  applications
                </span>
              </li>
            </ul>
          </div>

          {/* Block 2 — What you get */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              Across 8 sessions:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">01</span>
                <span>
                  1:1 coaching with senior recruiters who place at YC and a16z
                  portfolios
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">02</span>
                <span>
                  Real signal from active searches: how US founders actually
                  evaluate
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">03</span>
                <span>
                  Positioning, narrative, and interview calibration against real
                  startup bars
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">04</span>
                <span>
                  Direct intros when there&apos;s a fit, not generic referrals
                </span>
              </li>
            </ul>
          </div>

          {/* Block 3 — What changes after */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              By the end:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>You stop applying. You start being introduced.</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You stop pitching skills. You start landing on the right
                  table.
                </span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>
                  You stop getting filtered. You start getting hired where you
                  wanted to be.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mb-10">
          <p
            className="poppins font-medium max-w-2xl mx-auto"
            style={{ color: "#0F0F0F" }}
          >
            Built by recruiters who&apos;ve placed 160+ senior hires at YC and
            a16z portfolios. We know exactly where the bar is. Now we share it
            with you.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="text-white bg-indigo-950 font-bold text-lg rounded-xl pb-3 pt-3 pl-6 pr-6 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
            onClick={(event) =>
              redirect(
                event,
                "https://tally.so/r/RG02Gl",
              )
            }
          >
            Apply for Offer Acceleration →
          </button>
          <p className="poppins text-sm" style={{ color: "#5C5C5C" }}>
            Limited cohorts. Application required.
          </p>
        </div>
      </div>
    </section>
  );
}
