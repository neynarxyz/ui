import type { Meta, StoryObj } from "@storybook/react";
import {
  CodeIcon,
  FileIcon,
  FolderIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PlayIcon,
  TerminalIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../resizable";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Layout & Structure/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the panel group layout",
    },
    id: {
      control: "text",
      description: "ID for localStorage persistence of panel sizes",
    },
    onLayoutChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Code Editor Layout - A realistic Neynar Dashboard scenario showing
 * resizable panels for code editing, file explorer, and terminal output.
 */
export const InContext: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    function CodeEditorLayout() {
      const [activeFile, setActiveFile] = useState("index.tsx");
      const [output, setOutput] = useState("");

      const handleRun = () => {
        setOutput(
          "Running build...\nCompiling TypeScript...\nBuild completed successfully!",
        );
      };

      return (
        <div className="h-screen w-full">
          <ResizablePanelGroup orientation="horizontal">
            {/* File Explorer Sidebar */}
            <ResizablePanel defaultSize="20%" minSize="15%" maxSize="30%">
              <div className="flex h-full flex-col">
                <div className="border-b p-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <FolderIcon className="size-4" />
                    Explorer
                  </h3>
                </div>
                <div className="flex-1 overflow-auto p-2">
                  <div className="space-y-1">
                    {[
                      "index.tsx",
                      "app.tsx",
                      "components.tsx",
                      "utils.ts",
                      "types.ts",
                    ].map((file) => (
                      <button
                        key={file}
                        onClick={() => setActiveFile(file)}
                        className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors hover:bg-accent ${
                          activeFile === file ? "bg-accent" : ""
                        }`}
                      >
                        <FileIcon className="size-3.5" />
                        {file}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Code Editor + Terminal */}
            <ResizablePanel defaultSize="80%">
              <ResizablePanelGroup orientation="vertical">
                {/* Code Editor */}
                <ResizablePanel defaultSize="70%" minSize="30%">
                  <div className="flex h-full flex-col">
                    <div className="border-b p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CodeIcon className="size-4" />
                          <span className="text-sm font-medium">
                            {activeFile}
                          </span>
                        </div>
                        <Button size="sm" onClick={handleRun}>
                          <PlayIcon data-icon="inline-start" />
                          Run
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted/30 flex-1 overflow-auto p-4">
                      <pre className="font-mono text-sm">
                        <code>{`import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}`}</code>
                      </pre>
                    </div>
                  </div>
                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* Terminal Output */}
                <ResizablePanel defaultSize="30%" minSize="20%">
                  <div className="flex h-full flex-col">
                    <div className="border-b p-3">
                      <h3 className="flex items-center gap-2 text-sm font-semibold">
                        <TerminalIcon className="size-4" />
                        Terminal
                      </h3>
                    </div>
                    <div className="bg-muted/50 flex-1 overflow-auto p-4">
                      <pre className="font-mono text-xs">
                        <code>{output || "Ready to run..."}</code>
                      </pre>
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      );
    }

    return <CodeEditorLayout />;
  },
};

/**
 * Animated collapse/expand using the `collapsed` and `animated` props.
 * Control collapse state declaratively - no ref needed.
 * Toggle the animated prop to compare instant vs smooth transitions.
 */
export const AnimatedCollapse: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function AnimatedCollapseDemo() {
      const [isCollapsed, setIsCollapsed] = useState(false);
      const [animated, setAnimated] = useState(true);

      return (
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={() => setIsCollapsed(!isCollapsed)}
              variant="default"
            >
              {isCollapsed ? (
                <PanelLeftOpenIcon data-icon="inline-start" />
              ) : (
                <PanelLeftCloseIcon data-icon="inline-start" />
              )}
              {isCollapsed ? "Expand" : "Collapse"}
            </Button>
            <Button
              onClick={() => setAnimated(!animated)}
              variant={animated ? "secondary" : "outline"}
            >
              Animated: {animated ? "On" : "Off"}
            </Button>
          </div>
          <div className="border-border h-[400px] w-full rounded-lg border">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel
                collapsed={isCollapsed}
                animated={animated}
                defaultSize="25%"
                minSize="15%"
                maxSize="40%"
                collapsible
                collapsedSize="0%"
              >
                <div className="flex h-full flex-col">
                  <div className="border-b p-3">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                      <FolderIcon className="size-4" />
                      Sidebar
                    </h3>
                  </div>
                  <div className="flex-1 overflow-auto p-4">
                    <div className="space-y-2">
                      {["Dashboard", "Analytics", "Reports", "Settings"].map(
                        (item) => (
                          <div
                            key={item}
                            className="hover:bg-accent rounded px-2 py-1.5 text-sm transition-colors"
                          >
                            {item}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize="75%">
                <div className="flex h-full flex-col">
                  <div className="border-b p-3">
                    <h3 className="text-sm font-semibold">Main Content</h3>
                  </div>
                  <div className="flex-1 p-4">
                    <p className="text-muted-foreground text-sm">
                      The sidebar uses{" "}
                      <code className="bg-muted rounded px-1 text-xs">
                        collapsed={"{isCollapsed}"}
                      </code>{" "}
                      for declarative control. Toggle the button above to
                      compare instant vs animated transitions.
                    </p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      );
    }

    return <AnimatedCollapseDemo />;
  },
};

/**
 * Complete design system reference showing all resizable panel configurations,
 * directions, handle styles, and complex layouts.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-6xl space-y-10">
      {/* Horizontal Layout */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Horizontal Layout</h3>
          <p className="text-muted-foreground text-sm">
            Panels arranged side-by-side with vertical resize handles.
          </p>
        </div>
        <div className="border-border h-[300px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Left Panel
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Right Panel
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Vertical Layout */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Layout</h3>
          <p className="text-muted-foreground text-sm">
            Panels stacked vertically with horizontal resize handles.
          </p>
        </div>
        <div className="border-border h-[300px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Top Panel
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Bottom Panel
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Handle Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Handle Styles</h3>
          <p className="text-muted-foreground text-sm">
            Resize handles with and without visible grip indicators.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-medium">
              Default Handle (Invisible)
            </p>
            <div className="border-border h-[200px] w-full rounded-lg border">
              <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize="50%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground text-sm">
                      Hover between panels
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize="50%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground text-sm">
                      to see handle
                    </span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">With Visible Handle</p>
            <div className="border-border h-[200px] w-full rounded-lg border">
              <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize="50%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground text-sm">
                      Visible grip
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="50%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground text-sm">
                      indicator
                    </span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Three Panels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Multiple Panels</h3>
          <p className="text-muted-foreground text-sm">
            Three or more panels with independent resize handles.
          </p>
        </div>
        <div className="border-border h-[300px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="25%" minSize="15%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Sidebar
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%" minSize="30%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Main Content
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="25%" minSize="15%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Inspector
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Nested Layouts */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Nested Layouts</h3>
          <p className="text-muted-foreground text-sm">
            Complex layouts with nested horizontal and vertical panel groups.
          </p>
        </div>
        <div className="border-border h-[400px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="25%" minSize="20%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted-foreground font-semibold">
                  Sidebar
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="75%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="60%" minSize="40%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground font-semibold">
                      Main Content
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="40%" minSize="20%">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-muted-foreground font-semibold">
                      Footer Panel
                    </span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Min/Max Constraints */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Constraints</h3>
          <p className="text-muted-foreground text-sm">
            Panels with minimum and maximum size limits to prevent
            over-resizing.
          </p>
        </div>
        <div className="border-border h-[300px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="30%" minSize="20%" maxSize="40%">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
                <span className="text-muted-foreground font-semibold">
                  Constrained
                </span>
                <span className="text-muted-foreground text-xs">
                  Min: 20% / Max: 40%
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%" minSize="60%">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
                <span className="text-muted-foreground font-semibold">
                  Flexible
                </span>
                <span className="text-muted-foreground text-xs">Min: 60%</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Dashboard Layout Example */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Dashboard Layout</h3>
          <p className="text-muted-foreground text-sm">
            Real-world dashboard with navigation, content area, and details
            panel.
          </p>
        </div>
        <div className="border-border h-[500px] w-full rounded-lg border">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize="20%" minSize="15%">
              <div className="flex h-full flex-col gap-2 p-4">
                <h4 className="text-sm font-semibold">Navigation</h4>
                <div className="flex-1 space-y-1">
                  {["Dashboard", "Analytics", "Reports", "Settings"].map(
                    (item) => (
                      <div
                        key={item}
                        className="hover:bg-accent rounded px-2 py-1.5 text-sm transition-colors"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%" minSize="30%">
              <div className="flex h-full flex-col">
                <div className="border-b p-4">
                  <h4 className="text-sm font-semibold">Main Content</h4>
                </div>
                <div className="flex-1 p-4">
                  <div className="bg-muted/30 h-full rounded-lg"></div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="30%" minSize="20%">
              <div className="flex h-full flex-col">
                <div className="border-b p-4">
                  <h4 className="text-sm font-semibold">Details Panel</h4>
                </div>
                <div className="flex-1 p-4">
                  <div className="space-y-3">
                    {["Property 1", "Property 2", "Property 3"].map((prop) => (
                      <div key={prop}>
                        <p className="text-muted-foreground text-xs">{prop}</p>
                        <p className="text-sm">Value</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing resizable panel props.
 */
export const Interactive: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize="50%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-muted-foreground font-semibold">
              Panel One
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-muted-foreground font-semibold">
              Panel Two
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
