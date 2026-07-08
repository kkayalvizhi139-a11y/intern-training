import Greeting from './Greeting'
import TsxRules from './TsxRules'
import StyledCard from './StyledCard'
import Profile from './Profile'
import SkillList from './SkillList'
import ScoreCard from './ScoreCard'
import StatusBadge from './StatusBadge'
import InternCard from './InternCard'
import Dashboard from './Dashboard'
import SelfLearning from './SelfLearning'

// A React component is a reusable function that returns TSX (UI) to display in the browser.
// A Fragment groups multiple elements without adding an extra DOM element.
function App() {
  return (
    <>
      <h1>Hello React</h1>

      <Greeting />

      <TsxRules />

      <StyledCard />

      <Profile />


      <SkillList />

      <ScoreCard />

      <StatusBadge />

       <InternCard />

       <Dashboard />

       <SelfLearning />
    </>
  )
}

export default App
// Fragment (<>...</>) does not create an extra DOM element, unlike a <div>.
// It is useful when you need to group multiple elements without affecting the HTML structure or layout.