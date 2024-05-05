import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/button/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
    color: "black",
    backgroundColor: "blue_200",
  },
};

export const Blue = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"blue_50"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_100"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_200"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_300"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_400"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_500"} label={"Button"} />
      <Button color={"black"} backgroundColor={"blue_600"} label={"Button"} />
      <Button color={"white"} backgroundColor={"blue_700"} label={"Button"} />
      <Button color={"white"} backgroundColor={"blue_800"} label={"Button"} />
      <Button color={"white"} backgroundColor={"blue_900"} label={"Button"} />
    </div>
  ),
};

export const Primary = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"primary_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"primary_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"primary_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"primary_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"primary_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"primary_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"primary_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"primary_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"primary_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"primary_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Gray = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"gray_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"gray_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"gray_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"gray_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"gray_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"gray_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"gray_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"gray_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"gray_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"gray_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Green = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"green_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"green_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"green_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"green_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"green_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"green_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"green_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"green_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"green_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"green_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Indigo = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"indigo_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"indigo_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"indigo_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"indigo_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"indigo_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"indigo_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"indigo_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"indigo_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"indigo_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"indigo_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Red = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"red_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"red_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"red_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"red_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"red_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"red_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"red_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"red_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"red_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"red_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Pink = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"pink_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"pink_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"pink_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"pink_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"pink_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"pink_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"pink_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"pink_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"pink_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"pink_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Violet = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"violet_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"violet_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"violet_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"violet_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"violet_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"violet_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"violet_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"violet_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"violet_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"violet_900"}
        label={"Button"}
      />
    </div>
  ),
};

export const Yellow = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button color={"black"} backgroundColor={"yellow_50"} label={"Button"} />
      <Button
        color={"black"}
        backgroundColor={"yellow_100"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"yellow_200"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"yellow_300"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"yellow_400"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"yellow_500"}
        label={"Button"}
      />
      <Button
        color={"black"}
        backgroundColor={"yellow_600"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"yellow_700"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"yellow_800"}
        label={"Button"}
      />
      <Button
        color={"white"}
        backgroundColor={"yellow_900"}
        label={"Button"}
      />
    </div>
  ),
};
