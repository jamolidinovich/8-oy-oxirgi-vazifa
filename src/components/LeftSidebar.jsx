import React from "react";

function LeftSidebar() {
  return (
    <div className="min-w-[300px] min-h-[100vh] bg-white border border-l-2 p-4">
      <div>
        <h2 className="flex gap-2">
          <p className="w-[30px] h-[30px] bg-blue-700 rounded font-bold text-white">
            DW
          </p>{" "}
          <span className="font-bold text-black">DashWind</span>
        </h2>
        <div className="flex flex-col gap-3 mt-8 text-black font-semibold">
          <p>Dashboard</p>
          <p>Leads</p>
          <p>Transaction</p>
          <p>Analytic</p>
          <p className="bg-slate-300 p-2 rounded rounded-r-lg  border border-l-4 border-blue-600 border-r-0 border-t-0 border-b-0">
            Integration
          </p>
          <p>Calendar</p>
          <select defaultChecked>
            <option value="Pages">Pages</option>
          </select>
          <select defaultChecked>
            <option value="Settings">Settings</option>
          </select>
          <select defaultChecked>
            <option value="Documantation">Documantation</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
