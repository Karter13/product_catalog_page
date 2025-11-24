import type { Meta, StoryObj } from "@storybook/react";
import { CatalogFilters } from "@/components/CatalogFilters";

const meta: Meta<typeof CatalogFilters> = {
  title: "Catalog/CatalogFilters",
  component: CatalogFilters,
};

export default meta;

type Story = StoryObj<typeof CatalogFilters>;

export const Default: Story = {
  args: {
    sort: "default",
    onSortChange: (value) => console.log("Sort changed:", value),
  },
};

export const PriceAsc: Story = {
  args: {
    sort: "price-asc",
    onSortChange: (value) => console.log("Sort changed:", value),
  },
};

export const PriceDesc: Story = {
  args: {
    sort: "price-desc",
    onSortChange: (value) => console.log("Sort changed:", value),
  },
};

export const Alphabetical: Story = {
  args: {
    sort: "alpha",
    onSortChange: (value) => console.log("Sort changed:", value),
  },
};
