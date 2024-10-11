"use client";
import { useState, useRef, ChangeEvent } from "react";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";
import DevCalendar from "../(dev-calendar)/dev-calendar";
import { IoCalendarOutline } from "react-icons/io5";

interface DevDatePickerProps {
  initialDate?: Date;
  onChange?: (date: Date) => void;
  showIcon?: boolean;
  disabled?: boolean;
}

function DevDatePicker({
  initialDate = new Date(),
  onChange,
  showIcon = true,
  disabled = false,
}: DevDatePickerProps) {
  const [date, setDate] = useState(initialDate);
  const [inputDate, setInputDate] = useState({
    year: initialDate.getFullYear().toString(),
    month: (initialDate.getMonth() + 1).toString().padStart(2, "0"),
    day: initialDate.getDate().toString().padStart(2, "0"),
  });

  const monthInputRef = useRef<HTMLInputElement>(null);
  const dayInputRef = useRef<HTMLInputElement>(null);

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 4) return;
    setInputDate((prev) => ({ ...prev, year: value }));
    updateDateFromInput({ ...inputDate, year: value });
    if (value.length === 4) {
      monthInputRef.current?.focus();
    }
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 2) return;
    setInputDate((prev) => ({ ...prev, month: value }));
    updateDateFromInput({ ...inputDate, month: value });
    if (value.length === 2) {
      dayInputRef.current?.focus();
    }
  };

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 2) return;
    setInputDate((prev) => ({ ...prev, day: value }));
    updateDateFromInput({ ...inputDate, day: value });
  };

  const updateDateFromInput = (newInputDate: typeof inputDate) => {
    const year = parseInt(newInputDate.year);
    const month = parseInt(newInputDate.month) - 1;
    const day = parseInt(newInputDate.day);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      const newDate = new Date(year, month, day);
      if (newDate.getTime() === newDate.getTime()) {
        setDate(newDate);
        onChange?.(newDate);
      }
    }
  };

  const handleCalendarChange = (newDate: Date) => {
    setDate(newDate);
    setInputDate({
      year: newDate.getFullYear().toString(),
      month: (newDate.getMonth() + 1).toString().padStart(2, "0"),
      day: newDate.getDate().toString().padStart(2, "0"),
    });
    onChange?.(newDate);
  };

  return (
    <div className="flex items-center justify-center gap-2 space-y-2 bg-LIGHT dark:bg-DARK border border-ACCENT/20 p-2 rounded-lg max-w-[250px]">
      <div className="flex gap-2 *:rounded-md *:px-1 *:border *:border-ACCENT">
        <input
          type="number"
          value={inputDate.year}
          onChange={handleYearChange}
          placeholder="YYYY"
          className="w-[40%]"
          disabled={disabled}
        />
        <input
          type="number"
          ref={monthInputRef}
          value={inputDate.month}
          onChange={handleMonthChange}
          placeholder="MM"
          min="1"
          max="12"
          className="w-[30%]"
          disabled={disabled}
        />
        <input
          type="number"
          ref={dayInputRef}
          value={inputDate.day}
          onChange={handleDayChange}
          placeholder="DD"
          min="1"
          max="31"
          className="w-[30%]"
          disabled={disabled}
        />
      </div>

      {showIcon && (
        <DevPopoverV1
          button={
            <button
              className="p-1 -translate-y-1 active:scale-95 transition-all text-white bg-ACCENT rounded-lg text-2xl"
              disabled={disabled}
            >
              <IoCalendarOutline />
            </button>
          }
        >
          <div className="scale-105 w-64">
            <DevCalendar onChange={handleCalendarChange} defaultDate={date} />
          </div>
        </DevPopoverV1>
      )}
    </div>
  );
}

export default DevDatePicker;
