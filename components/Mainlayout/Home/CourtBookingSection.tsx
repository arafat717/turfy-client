"use client";

import React, { useState } from "react";

// Mock Data for Courts
const courtsData = [
  {
    id: "arena-a1",
    name: "TURF ARENA A1",
    location: "New York",
    surface: "Artificial Turf",
    format: "5-aside",
    status: "Available",
    price: 200,
  },
  {
    id: "court-b3",
    name: "STADIUM COURT B3",
    location: "New York",
    surface: "Hybrid Grass",
    format: "7-a-side",
    status: "Available",
    price: 250,
  },
  {
    id: "pitch-c2",
    name: "ELITE PITCH C2",
    location: "Chicago",
    surface: "Hybrid Grass",
    format: "Full-size 11v11",
    status: "Busy 6PM - 8 PM",
    price: 400,
  },
  {
    id: "arena-d1",
    name: "INDOOR ARENA D1",
    location: "New York",
    surface: "Artificial Turf",
    format: "5-aside",
    status: "Available",
    price: 180,
  },
  {
    id: "velocity",
    name: "VELOCITY ARENA",
    location: "New York",
    surface: "Futsal",
    format: "5-aside",
    status: "Available",
    price: 220,
  },
];

// Mock Time Slots
const timeSlots = [
  { time: "06:00", disabled: false },
  { time: "07:00", disabled: false },
  { time: "08:00", disabled: true },
  { time: "09:00", disabled: false },
  { time: "10:00", disabled: false },
  { time: "11:00", disabled: false },
  { time: "12:00", disabled: false },
  { time: "01:00", disabled: false },
  { time: "02:00", disabled: false },
  { time: "03:00", disabled: true },
  { time: "04:00", disabled: false },
  { time: "05:00", disabled: false },
];

export default function CourtBookingSection() {
  const [selectedCourt, setSelectedCourt] = useState(courtsData[0]);
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    format: "",
  });

  return (
    <section className="max-w-[1400px] mx-auto bg-white text-neutral-900 pb-10 pt-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[4px] w-8 bg-[#9ecc00]" />
              <span className="text-[18px] font-bold tracking-widest text-neutral-800 uppercase">
                COURT BOOKING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-neutral-900">
              RESERVE YOUR <span className="text-slate-400">PITCH</span>
            </h2>
          </div>

          {/* View All Courts Button */}
          <button className="hidden sm:flex items-center gap-2 bg-[#83c400] hover:bg-[#8ebb00] transition-colors text-xs font-black uppercase text-neutral-900 py-2.5 px-5 rounded-2xl cursor-pointer shadow-sm">
            <span>View All Courts</span>
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-neutral-900 text-white">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: COURT LIST */}
          <div className="lg:col-span-5 space-y-4">
            {courtsData.map((court) => {
              const isSelected = selectedCourt.id === court.id;
              const isBusy = court.status.includes("Busy");

              return (
                <div
                  key={court.id}
                  onClick={() => setSelectedCourt(court)}
                  className={`relative p-5 rounded-xl bordertransition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#9ecc00] border-l-4 bg-slate-50/50 shadow-md"
                      : "border-slate-100 bg-white border hover:border-[#9ecc00] hover:border-l-3 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base sm:text-[24px] font-bold uppercase tracking-tight text-neutral-800">
                      {court.name}
                    </h3>
                    
                    {/* Status Badge */}
                    <span
                      className={`text-[12px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white ${
                        isBusy ? "bg-red-600" : "bg-[#10b981]"
                      }`}
                    >
                      {court.status}
                    </span>
                  </div>

                  {/* Court Specs / Info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[16px]">{court.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[16px]">{court.surface}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-[16px]">{court.format}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: BOOKING FORM */}
          <div className="lg:col-span-7 border border-slate-100 rounded-2xl p-6 sm:p-8 bg-white shadow-md">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-800 mb-6">
              BOOK {selectedCourt.name}
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Name & Phone Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-neutral-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9ecc00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-neutral-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9ecc00]"
                  />
                </div>
              </div>

              {/* Date & Format Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-neutral-700 mb-1.5">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9ecc00]"
                    />
                    <svg
                      className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-neutral-700 mb-1.5">
                    Format
                  </label>
                  <div className="relative">
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9ecc00] appearance-none"
                    >
                      <option value="">Select Format</option>
                      <option value="5-aside">5-aside</option>
                      <option value="7-a-side">7-a-side</option>
                      <option value="11v11">Full-size 11v11</option>
                    </select>
                    <svg
                      className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-neutral-700 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {timeSlots.map((slot, index) => {
                    const isSelected = selectedTime === slot.time;

                    return (
                      <button
                        key={index}
                        type="button"
                        disabled={slot.disabled}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                          slot.disabled
                            ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                            : isSelected
                            ? "bg-[#9ecc00] text-neutral-900 font-extrabold shadow-sm"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100"
                        }`}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-center justify-between mt-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-neutral-800">
                    Booking Total
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {selectedCourt.format} · 60 min · {selectedTime || "10:00"}
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-neutral-900">
                  ${selectedCourt.price}
                </div>
              </div>

              {/* Confirm Booking Button */}
              <button
                type="submit"
                className="w-full bg-[#9ecc00] cursor-pointer hover:bg-[#8ebb00] transition-colors text-neutral-900 font-black uppercase text-sm py-4 rounded-xl shadow-sm"
              >
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}