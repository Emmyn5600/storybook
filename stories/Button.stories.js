// Button.stories.js
import React from "react";
import Button from "../src/components/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
} 

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  backgroundColor: "#007bff",
};
