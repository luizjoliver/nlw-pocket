import dayjs from 'dayjs'
import { client, db } from '.'
import { goals, goalsCompletions } from './schema'

async function seed() {
  await db.delete(goalsCompletions)
  await db.delete(goals)

  const result = await db.insert(goals).values([
    { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
    { title: 'Exercitar', desiredWeeklyFrequency: 3 },
    { title: 'Meditar', desiredWeeklyFrequency: 1 },
  ]).returning()


  const startOfTheWeek = dayjs().startOf("week")

  await db.insert(goalsCompletions).values([
    {goalId:result[0].id,createdAt:startOfTheWeek.toDate()},
    {goalId:result[1].id,createdAt:startOfTheWeek.add(1,"day").toDate()}

  ])

  console.log('Seed Realizado com sucesso!')
}

seed().finally(() => {
  client.end()
})
