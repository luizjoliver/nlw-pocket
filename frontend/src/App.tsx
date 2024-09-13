import { Plus, X } from "lucide-react"
import logo from "./assets/logo.png"
import letsStart from "./assets/start.png"
import { Button } from "./components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./components/ui/dialog"

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <img src={logo} alt="in.orbit" />

        <img src={letsStart} alt="lets start illustration" />

        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">Você naõ cadastrou nenhuma meta, que tal cadastrar uma agora mesmo ?</p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4"/>
            Cadastrar meta
          </Button>
        </DialogTrigger>
         
    </div>

    </Dialog>
  )
}

export default App
