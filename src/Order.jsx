import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: "USD",
})

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [pizzaType, setPizzaType] = useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState("M")

  const [loading, setLoading] = useState(true)

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = intl.format(selectedPizza.sizes[pizzaSize])
  }

  useEffect(() => {
    const fetchPizzaTypes = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const pizzaRes = await fetch('/api/pizzas')
      const pizzaJson = await pizzaRes.json()

      setPizzaTypes(pizzaJson)
      setLoading(false)
    }

    fetchPizzaTypes();
  }, [])

  const handleType = (e) => {
    setPizzaType(e.target.value)
  }
  const handleSize = (e) => {
    setPizzaSize(e.target.value)
  }
  return (
    <div className="order">
      <h2> Create Order </h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type"> Pizza Type</label>
            <select name="pizza-type"
              onChange={handleType}
              value={pizzaType}
            >
              {
                pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))
              }

            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div >
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  onChange={handleSize}
                  id="pizza-s" />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  onChange={handleSize}
                  id="pizza-m" />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  onChange={handleSize}
                  id="pizza-l" />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit" >Add to Cart</button>
          <div className="order-pizza">
            {
              loading ? <h1>Loading...</h1> :
                (
                  <Pizza
                    name={selectedPizza.name}
                    description={selectedPizza.description}
                    image={selectedPizza.image}
                  />
                )
            }

            <p>{price}</p>
          </div>
        </div>
      </form>
    </div>
  )
}