"use client";
import React, { useEffect, useState } from "react";
import useZustStore from "../../utils/zust-store";
import ColorPopover from "./color-popover";
import { IoIosColorPalette } from "react-icons/io";
import ColorPckr from "./color-pckr";
import { BiReset } from "react-icons/bi";
import DevTooltipV1 from "../../../public/dev-components/tooltips/(dev-tooltip-v1)/dev-tooltip-v1";

interface Colors {
  hex: string;
  rgb: { r: number; g: number; b: number };
}

const ColorSwatch = () => {
  const { ACCENT, DARK, LIGHT, AccentLabel, DarkLabel, LightLabel } =
    useZustStore();
  const { rgb: accentRGB, hex: accentHex } = ACCENT;
  const { rgb: darkRGB, hex: darkHex } = DARK;
  const { rgb: lightRGB, hex: lightHex } = LIGHT;

  const changeTheme = (color: string, value: Colors, labelName: string) => {
    useZustStore.setState({
      [color]: {
        hex: value.hex,
        rgb: { r: value.rgb.r, g: value.rgb.g, b: value.rgb.b },
      },
    });
    changeLabel(labelName, `[${value.hex}]`);
  };

  const changeLabel = (label: string, value: string) => {
    useZustStore.setState({ [label]: value.trim() });
  };

  const resetSwatch = () => {
    useZustStore.setState({
      ACCENT: { hex: "#06b6d4", rgb: { r: 6, g: 182, b: 212 } },
      LIGHT: { hex: "#F5F8FF", rgb: { r: 245, g: 248, b: 255 } },
      DARK: { hex: "#1f2937", rgb: { r: 31, g: 41, b: 55 } },
      AccentLabel: "[#06b6d4]",
      LightLabel: "[#F5F8FF]",
      DarkLabel: "[#1f2937]",
    });
  };

  useEffect(() => {
    applyTheme();
  }, [ACCENT, DARK, LIGHT]);

  const applyTheme = () => {
    const root = document.documentElement;
    root.style.setProperty(
      "--ACCENT",
      `${accentRGB.r},${accentRGB.g},${accentRGB.b}`
    );
    root.style.setProperty("--DARK", `${darkRGB.r},${darkRGB.g},${darkRGB.b}`);
    root.style.setProperty(
      "--LIGHT",
      `${lightRGB.r},${lightRGB.g},${lightRGB.b}`
    );
  };

  return (
    <ColorPopover
      button={
        <DevTooltipV1 tipData="Change theme">
          <button
            className="text-2xl text-white bg-ACCENT p-2 rounded-full aspect-square"
            aria-label="Toggle dark mode relative"
          ><span className="animate-ping absolute -z-10 inset-1 rounded-full bg-ACCENT opacity-70"></span>
            <IoIosColorPalette />
          </button>
        </DevTooltipV1>
      }
    >
      <div className="p-2 grid grid-cols-[1fr_40px] gap-2">
        <div className="grid grid-cols-1 gap-2 *:text-nowrap">
          <h3>
            Variables
            <p className="text-xs opacity-70">as custom placeholder</p>
          </h3>
          <label htmlFor="accent">
            <p className="text-sm opacity-70">Accent</p>
            <input
              value={AccentLabel}
              onChange={(e) => changeLabel("AccentLabel", e.target.value)}
              type="text"
              className="outline-0 w-full focus:outline-accentNeon p-1 px-2 rounded-md border border-accentNeon/50 text-sm"
            />
          </label>
          <label htmlFor="accent">
            <p className="text-sm opacity-70">Dark mode</p>
            <input
              type="text"
              value={DarkLabel}
              onChange={(e) => changeLabel("DarkLabel", e.target.value)}
              className="outline-0 w-full focus:outline-accentNeon p-1 px-2 rounded-md border border-accentNeon/50 text-sm"
            />
          </label>
          <label htmlFor="accent">
            <p className="text-sm opacity-70">Light mode</p>
            <input
              type="text"
              value={LightLabel}
              onChange={(e) => changeLabel("LightLabel", e.target.value)}
              className="outline-0 w-full focus:outline-accentNeon p-1 px-2 rounded-md border border-accentNeon/50 text-sm"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-1 place-items-center">
          <div className="flex items-center gap-1 flex-col-reverse">
            <DevTooltipV1 tipData="Reset">
              <button
                className="text-xl text-accentNeon active:-rotate-90 transition-all"
                onClick={() => resetSwatch()}
              >
                <BiReset />
              </button>
            </DevTooltipV1>
            <h3>Colors</h3>
          </div>
          <ColorPckr
            defaultColor={{ hex: accentHex }}
            onChange={(e) => changeTheme("ACCENT", e, "AccentLabel")}
          />
          <ColorPckr
            defaultColor={{ hex: darkHex }}
            onChange={(e) => changeTheme("DARK", e, "DarkLabel")}
          />
          <ColorPckr
            defaultColor={{ hex: lightHex }}
            onChange={(e) => changeTheme("LIGHT", e, "LightLabel")}
          />
        </div>
      </div>
    </ColorPopover>
  );
};

export default ColorSwatch;
