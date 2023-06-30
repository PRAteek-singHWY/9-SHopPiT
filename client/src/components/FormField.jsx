import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import state from "../store";
import { useSnapshot } from "valtio";
function FormField({
    LabelName,
    type,
    placeholder,
    name,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) {
    const snap = useSnapshot(state);

    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label
                    htmlFor={name}
                    className={`block text-sm text-${snap.color}`}
                >
                    {LabelName}
                </label>
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="bg-[#f5d9bc] border border-[#090908] text-gray-900 text-sm rounded-lg focus:ring-[#161615] focus:border-[#0e0d0d]
      outline-none block w-full p-3 "
            />
        </div>
    );
}

export default FormField;
