import type { RegistryComponent } from "../schema";

export const ui: RegistryComponent[] = [
  {
    id: "ui/accordion",
    name: "Accordion",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/accordion.tsx",
      },
    ],
  },
  {
    id: "ui/alert",
    name: "Alert",
    dependencies: ["lucide-react"],
    registryDependencies: ["ui/icon-button"],
    files: [
      {
        path: "ui/alert.tsx",
      },
    ],
  },
  {
    id: "ui/avatar",
    name: "Avatar",
    dependencies: ["@radix-ui/react-avatar"],
    files: [
      {
        path: "ui/avatar.tsx",
      },
    ],
  },
  {
    id: "ui/badge",
    name: "Badge",
    files: [
      {
        path: "ui/badge.tsx",
      },
    ],
  },
  {
    id: "ui/button",
    name: "Button",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/button.tsx",
      },
    ],
  },
  {
    id: "ui/card",
    name: "Card",
    files: [
      {
        path: "ui/card.tsx",
      },
    ],
  },
  {
    id: "ui/checkbox",
    name: "Checkbox",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/checkbox.tsx",
      },
    ],
  },
  {
    id: "ui/dialog",
    name: "Dialog",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/dialog.tsx",
      },
    ],
  },
  {
    id: "ui/dropdown-menu",
    name: "Dropdown Menu",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
      },
    ],
  },
  {
    id: "ui/field",
    name: "Field",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/field.tsx",
      },
    ],
  },
  {
    id: "ui/hover-card",
    name: "Hover Card",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/hover-card.tsx",
      },
    ],
  },
  {
    id: "ui/icon-button",
    name: "Icon-button",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/icon-button.tsx",
      },
    ],
  },
  {
    id: "ui/input",
    name: "Input",
    files: [
      {
        path: "ui/input.tsx",
      },
    ],
  },
  {
    id: "ui/kbd",
    name: "Kbd",
    files: [
      {
        path: "ui/kbd.tsx",
      },
    ],
  },
  {
    id: "ui/popover",
    name: "Popover",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/popover.tsx",
      },
    ],
  },
  {
    id: "ui/progress",
    name: "Progress",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/progress.tsx",
      },
    ],
  },
  {
    id: "ui/prompt",
    name: "Prompt",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/prompt.tsx",
      },
    ],
  },
  {
    id: "ui/radio",
    name: "Radio",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/radio.tsx",
      },
    ],
  },
  {
    id: "ui/select",
    name: "Select",
    files: [
      {
        path: "ui/select.tsx",
      },
    ],
  },
  {
    id: "ui/separator",
    name: "Separator",
    files: [
      {
        path: "ui/separator.tsx",
      },
    ],
  },
  {
    id: "ui/sheet",
    name: "Sheet",
    dependencies: ["@base_ui/react", "lucide-react"],
    registryDependencies: ["ui/icon-button"],
    files: [
      {
        path: "ui/sheet.tsx",
      },
    ],
  },
  {
    id: "ui/slider",
    name: "Slider",
    files: [
      {
        path: "ui/slider.tsx",
      },
    ],
  },
  {
    id: "ui/stack",
    name: "Stack",
    files: [
      {
        path: "ui/stack.tsx",
      },
    ],
  },
  {
    id: "ui/switch",
    name: "Switch",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/switch.tsx",
      },
    ],
  },
  {
    id: "ui/tabs",
    name: "Tabs",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/tabs.tsx",
      },
    ],
  },
  {
    id: "ui/table",
    name: "Table",
    registryDependencies: ["ui/button", "ui/stack"],
    files: [
      {
        path: "ui/table.tsx",
      },
    ],
  },
  {
    id: "ui/text",
    name: "Text",
    files: [
      {
        path: "ui/text.tsx",
      },
    ],
  },
  {
    id: "ui/textarea",
    name: "Textarea",
    files: [
      {
        path: "ui/textarea.tsx",
      },
    ],
  },
  {
    id: "ui/tooltip",
    name: "Tooltip",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/tooltip.tsx",
      },
    ],
  },
];
