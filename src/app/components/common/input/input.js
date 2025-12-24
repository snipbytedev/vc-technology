// components/Input.jsx
"use client";

import React, { useState, forwardRef, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Alert from "../alert/alert";

const Input = forwardRef((props, ref) => {
  const {
    type = "text",
    label,
    placeholder,
    className = "",
    error,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "error" });
  const alertTimeout = useRef(null);

  const inputType = type === "password" && showPassword ? "text" : type;

  const triggerAlert = (msg) => {
    if (alertTimeout.current) clearTimeout(alertTimeout.current);
    setAlert({ show: true, message: msg, type: "error" });
    alertTimeout.current = setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    const value = e.target.value;
    const cursorPos = e.target.selectionStart;

    // Allow navigation & editing
    if (
      e.ctrlKey ||
      e.metaKey ||
      ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"].includes(key)
    ) {
      return;
    }

    let blocked = false;
    let message = "";

    switch (type) {
      case "email":
        if (key === " ") {
          blocked = true;
          message = "No spaces in email";
        } else if (!/[a-zA-Z0-9@._-]/.test(key)) {
          blocked = true;
          message = "Invalid email character";
        } else if (key === "@" && value.includes("@")) {
          blocked = true;
          message = "Only one @ allowed";
        }
        break;

      case "tel":
        if (!/[0-9+\-\(\)\s]/.test(key)) {
          blocked = true;
          message = "Only numbers, +, -, (), space allowed";
        }
        break;

      // AGE / POSITIVE NUMBER ONLY — NO MINUS, NO NEGATIVE, NO FUNNY BUSINESS
      case "number":
        if (label && label.toLowerCase().includes("age")) {
          // Special rule for Age fields
          if (key === "-" || key === ".") {
            blocked = true;
            message = key === "-" ? "Age cannot be negative" : "Age must be a whole number";
          } else if (!/[0-9]/.test(key)) {
            blocked = true;
            message = "Only whole numbers allowed for age";
          }
        } else {
          // General number field (price, quantity, etc.) — allow one dot, minus only at start
          if (key === "-" && cursorPos !== 0) {
            blocked = true;
            message = "Minus only at the beginning";
          }
          if (key === "." && value.includes(".")) {
            blocked = true;
            message = "Only one decimal point";
          }
          if (!/[0-9.\-]/.test(key)) {
            blocked = true;
            message = "Invalid number";
          }
        }
        break;

      case "url":
        if (!/[a-zA-Z0-9\/\:\.\-\_\%\?\=\&\#]/.test(key)) {
          blocked = true;
          message = "Invalid URL character";
        }
        break;

      case "text":
        if (rest.maxLength && value.length >= rest.maxLength) {
          blocked = true;
          message = `Maximum ${rest.maxLength} characters`;
        }
        break;
    }

    if (blocked) {
      e.preventDefault();
      triggerAlert(message);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text");
    let cleaned = pasted;
    let message = "";

    switch (type) {
      case "email":
        cleaned = pasted.replace(/[^a-zA-Z0-9@._-]/g, "");
        if (cleaned.split("@").length > 2) {
          cleaned = cleaned.split("@")[0] + "@";
        }
        message = cleaned !== pasted ? "Invalid email characters removed" : "";
        break;

      case "tel":
        cleaned = pasted.replace(/[^0-9+\-\(\)\s]/g, "");
        message = "Invalid phone characters removed";
        break;

      case "number":
        if (label && label.toLowerCase().includes("age")) {
          // AGE: only positive whole numbers
          cleaned = pasted.replace(/[^0-9]/g, "");
          if (cleaned !== pasted) {
            message = "Only whole numbers allowed for age";
          }
          if (cleaned && parseInt(cleaned) > 150) {
            cleaned = "150";
            message = "Age capped at 150";
          }
        } else {
          // Normal number: allow one dot, minus only at start
          const match = pasted.match(/-?\d*\.?\d*/);
          cleaned = match ? match[0] : "";
          message = "Invalid number — cleaned";
        }
        break;

      case "url":
        cleaned = pasted.replace(/[^a-zA-Z0-9\/\:\.\-\_\%\?\=\&\#]/g, "");
        if (cleaned && !/^https?:\/\//i.test(cleaned)) {
          cleaned = "https://" + cleaned.replace(/^https?:\/\/+/gi, "");
          message = "Added https://";
        }
        break;
    }

    if (cleaned || cleaned === "") {
      document.execCommand("insertText", false, cleaned);
      if (message) triggerAlert(message);
    }
  };

  const hasError = !!error;
  const errorMessage = typeof error === "string" ? error : error?.message || "";

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {rest.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {alert.show && <Alert type="error" message={alert.message} />}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 border rounded-lg outline-none transition-all
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${hasError ? "border-red-500" : "border-gray-300"}
            ${type === "password" ? "pr-12" : ""}
            ${className}
          `}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={ref}
          {...rest}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
          </button>
        )}
      </div>

      {hasError && (
        <span className="block text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;