import { Dialog } from './components/ui/dialog'
import { CreateGoals } from './components/create-goals'
import EmptyGoals from './components/empty-goals'
import Summary from './components/summary'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals/> */}
      <Summary/>
      <CreateGoals />
    </Dialog>
  )
}

export default App
