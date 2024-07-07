'use client'
import React, { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip as Dropdown } from "react-tooltip";

type Item = { id: number, value: string };
type StateProps = { suggestions: Item[], focus: number, value: string };

const DevAutocomplete = ({ items }: { items: Item[] }) => {
    const [state, setState] = useState<StateProps>({ suggestions: [], focus: -1, value: '' });
    const containerRef = useRef<HTMLDivElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const [calcWidth, setCalcWidth] = useState(0);
    const randomId = useId();

    useEffect(() => {
        if (containerRef.current) {
            setCalcWidth(containerRef.current.offsetWidth);
        }
        const handleOutsideClick = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setState(prev => ({ ...prev, suggestions: [] }));
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    useEffect(() => {
        if (ulRef.current && state.focus > -1) {
            const focusedItem = ulRef.current.children[state.focus] as HTMLElement;
            focusedItem.scrollIntoView({ block: 'nearest' });
        }
    }, [state.focus]);

    const updateState = (value: string, suggestions: Item[] = [], focus: number = -1) => {
        setState({ value, suggestions, focus });
    };

    const handleInput = ({ target: { value } }: { target: { value: string } }) => {
        const lowercaseValue = value.toLowerCase();
        updateState(
            value,
            lowercaseValue ? items.filter(item => item.value.toLocaleLowerCase().includes(lowercaseValue)) : []
        );
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        const { suggestions, focus } = state;
        if (!suggestions.length) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            updateState(state.value, suggestions, (focus + (e.key === 'ArrowDown' ? 1 : -1) + suggestions.length) % suggestions.length);
        } else if (e.key === 'Enter' && focus > -1) {
            e.preventDefault();
            selectSuggestion(focus);
        }
    };

    const selectSuggestion = (index: number) => {
        console.log('Id of selected item is:', state.suggestions[index].id);
        updateState(state.suggestions[index].value, []);
    };

    return (
        <div ref={containerRef} className="w-full md:max-w-sm" data-tooltip-id={randomId}>
            <input
                type="search"
                className="bg-slate-50 dark:bg-slate-900 flex item-center w-full rounded-full p-1 px-3 outline-none border border-cyan-500/50 focus:border-cyan-500"
                placeholder="search fruits..."
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
                    offset={3}
                    opacity={1}
                    style={{ backgroundColor: "transparent", padding: "0px", width: `${calcWidth - 20}px` }}
                >
                    <ul
                        ref={ulRef}
                        className="border space-y-1 bg-slate-5 dark:bg-slate-900 border-cyan-500/50 rounded-md p-1 px-0 w-full shadow max-h-40 overflow-hidden [&::-webkit-scrollbar]:hidden overflow-y-scroll"
                    >
                        {state.suggestions.map((suggestion, index) => (
                            <li
                                key={suggestion.id}
                                className={`w-full p-1 px-2 text-black dark:text-white ${index === state.focus ? 'bg-cyan-500' : 'hover:bg-cyan-500/30'}`}
                            >
                                <button
                                    className='w-full text-left'
                                    onClick={() => selectSuggestion(index)}
                                >{suggestion.value}</button>
                            </li>
                        ))}
                    </ul>
                </Dropdown>, document.body
            )}
        </div>
    );
};

export default DevAutocomplete;
