// Button.stories.js
import React from "react";
import Button from "../src/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    secondary: { control: "boolean" },
    tertiary: { control: "boolean" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    customIcon: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  backgroundColor: "#007bff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  label: "Disabled",
  backgroundColor: "#007bff",
  disabled: true,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  primary: true,
  label: "Button",
  backgroundColor: "#007bff",
  size: "large",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  primary: true,
  label: "Button",
  backgroundColor: "#007bff",
  size: "small",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  primary: true,
  label: "Button Text",
  backgroundColor: "#007bff",
  customIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  secondary: true,
  label: "Button",
  backgroundColor: "#ffffff",
  customIcon: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  primary: false,
  secondary: false,
  tertiary: true,
  label: "Button",
  backgroundColor: "#f9f9fb", // Background color for the tertiary button
};
