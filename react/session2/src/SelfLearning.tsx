import type { ReactNode, ReactElement } from 'react'

// ----------------------------------------------------
// Task 1 - React.FC
// React.FC automatically includes the children prop.
// Typing the props parameter directly only includes the props you define.
// Many projects prefer typing props directly because it is more explicit
// and avoids adding children when the component does not use them.
// ----------------------------------------------------

interface MessageProps {
  message: string
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <p>{message}</p>
}

// ----------------------------------------------------
// Task 2 - PropsWithChildren
// PropsWithChildren automatically adds an optional children prop.
// Writing children: ReactNode manually gives more control because
// you can make children required or optional yourself.
// ----------------------------------------------------

import type { PropsWithChildren } from 'react'

type PanelProps = PropsWithChildren<{
  title: string
}>

function Panel({ title, children }: PanelProps) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

// ----------------------------------------------------
// Task 3 - key prop
// React uses key internally to identify list items efficiently.
// The key prop is NOT passed to the component,
// so props.key is always undefined.
// ----------------------------------------------------

// ----------------------------------------------------
// Task 4 - Multiple ReactNode slots
// children is passed between opening and closing tags.
// Named props like header and footer allow fixed layout sections.
// Named slots are useful for layouts, dialogs and page templates.
// ----------------------------------------------------

interface PageLayoutProps {
  header: ReactNode
  children: ReactNode
  footer: ReactNode
}

function PageLayout({ header, children, footer }: PageLayoutProps) {
  return (
    <div style={{ border: '2px solid #444', marginTop: '20px' }}>
      <header style={{ background: '#f0f0f0', padding: '12px' }}>
        {header}
      </header>

      <main style={{ padding: '16px' }}>
        {children}
      </main>

      <footer style={{ background: '#f0f0f0', padding: '12px' }}>
        {footer}
      </footer>
    </div>
  )
}

// ----------------------------------------------------
// Task 5 - ReactNode vs ReactElement vs JSX.Element
//
// ReactNode
// Used for anything React can render.
//
// ReactElement
// Requires a JSX element.
//
// JSX.Element
// Similar to ReactElement and usually used for components
// returning JSX.
// ----------------------------------------------------

interface WrapperProps {
  content: ReactNode
}

function Wrapper({ content }: WrapperProps) {
  return <div>{content}</div>
}

interface IconButtonProps {
  icon: ReactElement
  label: string
}

function IconButton({ icon, label }: IconButtonProps) {
  return (
    <button>
      {icon} {label}
    </button>
  )
}

interface TooltipProps {
  trigger: ReactElement
  tip: string
}
function Tooltip({ trigger, tip }: TooltipProps) {
  return <span title={tip}>{trigger}</span>
}

function SelfLearning() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Self Learning Tasks</h2>

      <Message message="Hello React.FC" />

      <Panel title="PropsWithChildren">
        <p>This content is passed as children.</p>
      </Panel>

      <PageLayout
        header={<h1>Intern Dashboard</h1>}
        footer={<p>© 2026 Aarvihsolutions</p>}
      >
        <p>Main content goes here as children.</p>
        <p>Any JSX works — text, elements, or other components.</p>
      </PageLayout>

      <hr />

      <Wrapper content="ReactNode accepts text." />

      <Wrapper
        content={
          <strong>
            ReactNode also accepts JSX.
          </strong>
        }
      />

      <IconButton
        icon={<span>⭐</span>}
        label="Star"
      />

      <br />
      <br />

      <Tooltip
        trigger={<button>Hover me</button>}
        tip="Tooltip Example"
      />

      {/*
        Try these one at a time to observe TypeScript errors:

        <IconButton icon="⭐" label="Wrong" />
        Error:
        Type 'string' is not assignable to type 'ReactElement'.

        <Tooltip trigger={null} tip="Wrong" />
        Error:
        Type 'null' is not assignable to type 'JSX.Element'.
      */}

      {/*
        Summary:
        ReactNode    → accepts everything React can render.
        ReactElement → requires a JSX element.
        JSX.Element  → component return type / JSX element, rejects null.
      */}
    </div>
  )
}

export default SelfLearning

/*
Summary:

ReactNode
→ Accepts everything React can render
  (text, numbers, JSX, arrays, null, undefined, etc.)

ReactElement
→ Requires a real JSX element such as <button /> or <span />.

In modern React + TypeScript (Vite), ReactElement is preferred instead of JSX.Element.
*/