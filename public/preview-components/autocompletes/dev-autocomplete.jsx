'use client'
import React, { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip as Dropdown } from "react-tooltip";


const DevAutocomplete = ({ items }) => {
    const [state, setState] = useState({ suggestions: [], focus: -1, value: '' });
    const containerRef = useRef(null);
    const [calcWidth, setCalcWidth] = useState(0);
    const randomId = useId();
    useEffect(() => {
        if (containerRef.current) {
            setCalcWidth(containerRef.current.offsetWidth);
        }
        const handleOutsideClick = (e) => {
            if (!containerRef.current?.contains(e.target)) {
                setState(prev => ({ ...prev, suggestions: [] }));
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    const updateState = (value, suggestions = [], focus = -1) => {
        setState({ value, suggestions, focus });
    };

    const handleInput = ({ target: { value } }) => {
        const lowercaseValue = value.toLowerCase();
        updateState(
            value,
            lowercaseValue ? items.filter(items => items.toLowerCase().startsWith(lowercaseValue)) : []
        );
    };

    const handleKeyDown = (e) => {
        const { suggestions, focus } = state;
        if (!suggestions.length) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            updateState(state.value, suggestions, (focus + (e.key === 'ArrowDown' ? 1 : -1) + suggestions.length) % suggestions.length);
        } else if (e.key === 'Enter' && focus > -1) {
            e.preventDefault();
            updateState(suggestions[focus], []);
        }
    };

    return (
        <div ref={containerRef} className="w-full md:max-w-sm" data-tooltip-id={randomId}>
            <input
                type="search"
                className="bg-white dark:bg-slate-800  w-full rounded-full px-1 outline-none outline-cyan-500/50 focus:outline-cyan-500"
                placeholder="Start typing..."
                value={state.value}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />
            {state.suggestions.length > 0 && createPortal(
                <Dropdown
                    clickable={true}
                    isOpen={true}
                    id={randomId}
                    place="bottom"
                    offset={6}
                    opacity={1}
                    style={{ backgroundColor: "transparent", padding: "0px", width: calcWidth + "px" }}
                >
                    <ul className="border space-y-1 bg-slate-5 dark:bg-slate-900  border-cyan-500/50 rounded-md p-1 w-full shadow "
                    >
                        {state.suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className={`w-full p-[2px] px-2 rounded-md text-black dark:text-white ${index === state.focus ? 'bg-cyan-500' : 'hover:bg-cyan-500/30'}`}
                            >
                                <button
                                    className='w-full text-left'
                                    onClick={() => updateState(suggestion, [])}
                                >{suggestion}</button>
                            </li>
                        ))}
                    </ul>
                </Dropdown>, document.body

            )}
        </div>
    );
};

export default DevAutocomplete;