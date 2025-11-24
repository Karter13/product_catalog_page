import type { Meta, StoryObj } from "@storybook/react";
import { ScrollTopButton } from '@/components/ui/ScrollTopButton';

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ height: "2000px", padding: "20px" }}>
    <p>Прокрути вниз, чтобы увидеть кнопку...</p>
    {children}
  </div>
);

const meta: Meta<typeof ScrollTopButton> = {
  title: "UI/ScrollTopButton",
  component: ScrollTopButton,
  decorators: [
    (Story) => (
      <ScrollWrapper>
        <Story />
      </ScrollWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ScrollTopButton>;

export const Default: Story = {};
