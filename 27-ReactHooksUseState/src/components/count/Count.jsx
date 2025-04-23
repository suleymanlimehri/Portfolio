import { useState } from 'react'
import style from "../count/Count.module.css"
function Count() {
  let [count, setCount] = useState(0)
  let [input, setInput] = useState("")
  function increase() {
    setCount(count + 1)
  }
  function descrise() {
    setCount(count > 0 ? count - 1 : 0)
  }
  function add() {
    let value = Number(input)
    setCount( value!="" ? count + value : "")

  }
  function substract() {
    let value = Number(input)
    setCount(value > 0 && count > 0 ? count - value : 0)
  }
  return (
    <div className={`${style.count_area} container`}>
      <h2 className={style.title}>Counter</h2>
      <p className={style.paraqraf}>{count}</p>
      <div className={style.button}>
        <button onClick={() => descrise()} className={style.increase}>-</button>
        <button onClick={() => increase()}  className={style.increase}>+</button>
      </div>

      <div className={style.input}>
        <div>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className={style.btn}>
          <button onClick={() => add()} className={style.add}>Add</button>
          <button onClick={() => substract() }className={style.add} >Subtract</button>
        </div>
      </div>
    </div>
  )
}

export default Count
