'use client'
import React, { useState } from 'react'
import MultiRangeSliderReact from '../../react-components/range-sliders/multi-range-slider-react';

const MultiRangeSliderReactUsage = () => {
    const [currMinValue, setCurrMinValue] = useState(25);
    const [currMaxValue, setCurrMaxValue] = useState(75);
    return (
        <div className="w-full border border-cyan-500/50 p-3 rounded-md">
            <div className="flex justify-between items-center">
                <h2 className="select-none font-semibold text-sm">
                    Filter by Price
                </h2>
                <pre className="border-cyan-400  rounded-md text-sm  space-x-2 border bg-cyan-500/30 flex px-2">
                    <p>
                        Rs.
                        {currMinValue} - Rs.{currMaxValue}
                    </p>
                </pre>
            </div>
            <MultiRangeSliderReact
                currMinValue={currMinValue}
                currMaxValue={currMaxValue}
                setCurrMinValue={setCurrMinValue}
                setCurrMaxValue={setCurrMaxValue}
                min={10}
                max={100}
                step={5}
            />
        </div>

    )
}

export default MultiRangeSliderReactUsage