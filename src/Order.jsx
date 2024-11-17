import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState("M")
  return (
    <div className="order">
      <h2> Create Order </h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type"> Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="peperoni"> The Peperoni Pizza</option>
              <option value="hawaiian"> The Hawaiian Pizza</option>
              <option value="big_meat"> The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s" />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m" />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l" />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit" >Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="another pep pizza"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$12.22</p>
          </div>
        </div>
      </form>
    </div>
  )

}
