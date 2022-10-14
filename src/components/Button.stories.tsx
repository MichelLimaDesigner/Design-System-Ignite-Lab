import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'md',
    children: 'Lorem ipsum',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}