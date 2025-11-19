import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "@/components/StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Catalog/StarRating",
  component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Rating_3_5: Story = {
  args: { rating: 3.5 },
};

export const Rating_5: Story = {
  args: { rating: 5 },
};

export const Rating_1: Story = {
  args: { rating: 1 },
};
