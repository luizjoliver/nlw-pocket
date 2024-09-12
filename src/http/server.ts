import fastify from 'fastify'
import { createGoal } from '../useCases/create-goal'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import z from 'zod'
import { getWeekPendingGoals } from '../useCases/get-week-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)


app.get("/pending-goals",async () =>{
   const {pendingGoals} = await getWeekPendingGoals()

   return {
    pendingGoals
   }
})

app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async request => {

    const {desiredWeeklyFrequency,title} = request.body

    await createGoal({ desiredWeeklyFrequency, title })
  }
)

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log('Server inciado! e teste + ')
  }
)
