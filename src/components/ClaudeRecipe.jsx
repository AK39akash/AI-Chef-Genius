import Markdown from "react-markdown"

export default function ClaudeRecipe(props) {
  return (
    <section class="suggested-recipe-container" aria-live="polite">
      <Markdown>{props.recipe}</Markdown>
    </section>
  )
}
