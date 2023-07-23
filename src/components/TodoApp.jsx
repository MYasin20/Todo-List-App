/* eslint-disable react/prop-types */
import TodoBody from "./TodoBody";
import bgDesktopLight from "../src/images/bg-desktop-light.jpg";
import bgMobileLight from "../src/images/bg-mobile-light.jpg";


const TodoApp = () => {
  return (
    <main className="min-h-screen w-full bg-[#fafafa] relative">
      <picture>
        <source
          srcSet={bgDesktopLight}
          media="(min-width:1024px)"
        />
        <img className="w-full max-h-80" src={bgMobileLight} alt="background image" />
      </picture>
      <TodoBody />
    </main>
  )
}

export default TodoApp
