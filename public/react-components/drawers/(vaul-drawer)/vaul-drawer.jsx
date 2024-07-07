"use client";

import { Drawer } from "vaul";

export default function VaulDrawer({ children = null, position = 'top', openBtn = null }) {
    const getPositionClasses = () => {
        switch (position) {
            case 'left': return { content: `left-0 top-0 bottom-0 w-80 h-full border-r pr-10 rounded-r-xl`, handle: '-right-8 top-1/2 -translate-y-1/2 h-16 w-3 cursor-w-resize' };
            case 'right': return { content: `right-0 top-0 bottom-0 w-80 h-full border-l pl-10 rounded-l-xl`, handle: '-left-8 top-1/2 -translate-y-1/2 h-16 w-3 cursor-w-resize' };
            case 'top': return { content: `top-0 left-0 right-0 h-80 w-full border-b pb-10 rounded-b-xl`, handle: '-bottom-8 left-1/2 -translate-x-1/2 w-16 h-3 cursor-n-resize' };
            case 'bottom': return { content: `bottom-0 left-0 right-0 h-80 w-full border-t rounded-t-xl pt-10`, handle: '-top-8 left-1/2 -translate-x-1/2 w-16 h-3 cursor-n-resize' };
            default: return { content: '', handle: '' };
        }
    };
    return (
        <Drawer.Root direction={position} shouldScaleBackground>
            <Drawer.Trigger asChild>
                {openBtn}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Drawer.Content className={`bg-white ${getPositionClasses().content} fixed bg-slate-50 p-3 dark:bg-slate-800 border-cyan-500/50`}>
                    <div className="h-full w-full relative">
                        <hr className={`hover:bg-cyan-500 rounded-full bg-cyan-500/50 absolute border-none ${getPositionClasses().handle}`} />
                        {children}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}