import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
/*//  dev-Modal css animation 
.Modal-Overlay {
  animation: modal-overlayShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.Modal-Content {
  animation: modal-contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes modal-contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}*/

export const ModalTrigger = ({ children }) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}
const DevModalV1 = ({
  title,
  children,
  modalBtn,
  closeIcon = true,
}) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>{modalBtn}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="Modal-Overlay inset-0 fixed bg-black/50 z-50" />
          <Dialog.Content className="Modal-Content w-full  fixed z-50 top-[50%] left-[50%] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-xl bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 *:p-3">
            {(closeIcon || title) && (
              <div className="flex items-start justify-end w-full !pb-0">
                {title && (
                  <Dialog.Title className="flex-grow font-semibold text-accentNeon text-lg">{title}</Dialog.Title>
                )}
                <Dialog.Close>🗙</Dialog.Close>
              </div>
            )}
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default DevModalV1;