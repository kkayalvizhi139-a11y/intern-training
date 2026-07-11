// import './App.css'
// import InternCard from './InternCard'
// import ProfileCard from './ProfileCard'

// function App() {
//   return (
//     <div>
//       {/* Error: Type 'string' is not assignable to type 'number'.
//           TypeScript catches this because score must be a number, preventing runtime bugs. */}
//       <InternCard name="Rahul" score={92} isPresent={true} />

//       {/* Error: Type 'string' is not assignable to type 'boolean'.
//           TypeScript ensures only true or false can be passed. */}
//       <InternCard name="Priya" score={78} isPresent={true} />

//       {/* Error: Required prop 'isPresent' is missing.
//           TypeScript ensures every required prop is provided. */}

//       {/* Error: Property 'age' does not exist on type 'InternCardProps'.
//           TypeScript prevents passing unexpected props to a component. */}
//       <InternCard name="Amit" score={45} isPresent={false} />

//       <hr />

//      <ProfileCard
//   name="Rahul"
//   role="Frontend"
//   score={92}
//   skills={['HTML', 'CSS', 'React']}
// />

// <ProfileCard
//   name="Priya"
//   skills={['Node.js', 'TypeScript']}
// />

// <ProfileCard />

//       <ProfileCard />
//     </div>
//   )
// }

// export default App

// import './App.css'
// import InternCard from './InternCard'
// import ProfileCard from './ProfileCard'
// import InternProfile from './InternProfile'
// import type { Intern } from './InternProfile'
// import Card from './Card'

// const rahul: Intern = {
//   id: 1,
//   name: 'Rahul',
//   score: 92,
//   isPresent: true,
//   skills: ['HTML', 'CSS', 'TypeScript', 'React'],
// }

// // The spread operator (...) creates a shallow copy of an object.
// // It is useful when you want to copy an object before modifying it,
// // so the original object remains unchanged.
// // Passing the original object directly is simpler when no changes are needed.
// const priya: Intern = {
//   id: 2,
//   name: 'Priya',
//   score: 78,
//   isPresent: true,
//   skills: ['Node.js', 'TypeScript'],
// }

// function App() {
//   return (
//     <div>
//       <InternCard
//   name="Rahul"
//   score={92}
//   isPresent={true}
//   role="Frontend"
// />

// <InternCard
//   name="Priya"
//   score={78}
//   isPresent={true}
//   role="Backend"
// />

// <InternCard
//   name="Amit"
//   score={45}
//   isPresent={false}
//   role="Frontend"
// />

//       <hr />

//       <ProfileCard
//         name="Rahul"
//         role="Frontend"
//         score={92}
//         skills={['HTML', 'CSS', 'React']}
//       />

//       <ProfileCard
//         name="Priya"
//         skills={['Node.js', 'TypeScript']}
//       />

//       <ProfileCard />

//       <hr />

//       <InternProfile intern={rahul} />

//       <InternProfile intern={priya} />

//       <InternProfile intern={{ ...priya }} />

//       <hr />

//       <Card title="Rahul">
//         <p>Score: 92</p>
//         <p>Status: Present</p>
//         <button>View Profile</button>
//       </Card>

//       <Card title="Announcements">
//         <ul>
//           <li>Session 3 tomorrow at 10am</li>
//           <li>Submit PRs by EOD</li>
//         </ul>
//       </Card>
//       <Card title="Empty Card" />
//     </div>
//   )
// }

// export default App
// import './App.css'
// import Dashboard from './Dashboard'

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   )
// }

// export default App
// import './App.css'
// import SelfLearning from './SelfLearning'

// function App() {
//   return <SelfLearning />
// }

// export default App
import Dashboard from './Dashboard'
import SelfLearning from './SelfLearning'

function App() {
  return (
    <>
      <Dashboard />
      <hr />
      <SelfLearning />
    </>
  )
}

export default App