'use client'
import React, { useEffect } from 'react'
import { arrayMove, List } from 'react-movable';

const ReactMovable = ({ items, setItems }: { items: string[], setItems: React.Dispatch<React.SetStateAction<string[]>> }) => {
    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <List
            values={items}
            lockVertically
            onChange={({ oldIndex, newIndex }) =>
                setItems(arrayMove(items, oldIndex, newIndex))
            }
            renderList={({ children, props }) => <ul
                className='w-full h-full' {...props}>{children}</ul>}

            //List Items
            renderItem={({ value, props, isDragged }) => (<li
                {...props}
                style={{
                    ...props.style,
                    margin: '0.5em 0em',
                }}
                className={`${isDragged ? "cursor-grabbing bg-cyan-500" : "bg-white border dark:bg-slate-800"} cursor-grab list-none w-full p-4  border-cyan-500/30 shadow  rounded-lg `}
            >
                {value}
            </li>)}
        />
    )
}

export default ReactMovable