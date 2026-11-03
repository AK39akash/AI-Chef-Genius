import Markdown from "react-markdown"

export default function GeminiRecipe(props) {
  return (
    <section class="suggested-recipe-container" aria-live="polite">
      <Markdown>{props.recipe}</Markdown>
    </section>
  )
}
