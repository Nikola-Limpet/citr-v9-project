import { useEffect, useState, useDebugValue } from "react"


export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null)

  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}` : "loading...",
  )

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const data = await fetch('/api/pizza-of-the-day')
      const pizzaOfTheDayjson = await data.json()
      setPizzaOfTheDay(pizzaOfTheDayjson)
    }

    fetchPizzaOfTheDay()
  }, [])


  return pizzaOfTheDay
}