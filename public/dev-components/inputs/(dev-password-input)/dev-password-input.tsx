'use client'
import React, { useState, useCallback } from "react";
import DevInputV1 from "../(dev-input-v1)/dev-input-v1";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const DevPasswordInput = ({ onChange, ...props }: React.ComponentProps<"input">) => {
  const [hide, setHide] = useState(true);
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = useCallback((pass: string) => {
    let score = 0;
    if (pass.length > 0) {
      // Length check
      if (pass.length >= 4) score++;
      if (pass.length >= 8) score++;
      // Character type checks
      if (/[a-z]/.test(pass)) score++;
      if (/[A-Z]/.test(pass)) score++;
      if (/[0-9]/.test(pass)) score++;
      if (/[^A-Za-z0-9]/.test(pass)) score++;
    }

    switch (score) {
      case 0:
      case 1:
        setStrength("");
        break;
      case 2:
        setStrength("weak");
        break;
      case 3:
      case 4:
        setStrength("medium");
        break;
      case 5:
        setStrength("strong");
        break;
      case 6:
        setStrength("very strong");
        break;
      default:
        setStrength("");
    }
  }, []);

  const getStrengthColor = () => {
    switch (strength) {
      case "weak":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "strong":
        return "text-green-500";
      case "very strong":
        return "text-blue-500";
      default:
        return "";
    }
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    checkPasswordStrength(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }, [onChange, checkPasswordStrength]);

  return (
    <div>
      <DevInputV1
        rounded="lg"
        {...props}
        type={hide ? "password" : "text"}
        labelName="Password"
        reverseIcon
        icon={
          <span
            className="cursor-pointer text-xl"
            onClick={() => setHide(!hide)}
          >
            {hide ? <VscEye /> : <VscEyeClosed />}
          </span>
        }
        onChange={handleInputChange}
      />
      <p
        className={`m-1 pointer-events-none transition-all font-semibold text-sm ${
          strength ? "opacity-100" : "opacity-0"
        } ${getStrengthColor()}`}
      >
        Password strength: {strength && strength}
      </p>
    </div>
  );
};

export default DevPasswordInput;