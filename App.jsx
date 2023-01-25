import { ref, reactive } from 'kongroo'


export default () => {
  const num = ref(0)

  return (
    <div>
      <h1>Hello Kongroo!</h1>
      <button onClick={() => num.value++}>点击次数: {num.value}</button>
    </div>
  )
}
