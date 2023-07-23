/* eslint-disable react/prop-types */
import TodoBody from "./TodoBody"

const TodoApp = () => {
  return (
    <main className="min-h-screen w-full bg-[#fafafa] relative">
      <picture>
        <source
          srcSet="../src/images/bg-desktop-light.jpg"
          media="(min-width:1024px)"
        />
        <img className="w-full max-h-80" src="../src/images/bg-mobile-light.jpg" alt="background image" />
      </picture>
      <TodoBody />
    </main>
  )
}

export default TodoApp
