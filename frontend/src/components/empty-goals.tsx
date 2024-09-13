import { DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import logo from '../assets/logo.png'
import letsStart from '../assets/start.png'

export default function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="in.orbit" />

      <img src={letsStart} alt="lets start illustration" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você naõ cadastrou nenhuma meta, que tal cadastrar uma agora mesmo ?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
