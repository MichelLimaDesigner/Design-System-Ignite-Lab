import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode,
}

function TextInputRoot({ children }: TextInputRootProps){
  return(
    <div
      className={
        clsx(
          "py-4 px-3 h-12 flex items-center gap-3 bg-gray-800 w-full rounded focus-within:ring-2 ring-cyan-300",
          {}
        )
      }
    >
      { children }
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode,
}

function TextInputIcon({ children }: TextInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}