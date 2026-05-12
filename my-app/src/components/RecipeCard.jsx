function RecipeCard(props) {
  return (
    <article>
      <img src={props.image} alt={props.title} />

      <section>
        <h2>{props.title}</h2>
        <h4>{props.category}</h4>
        <p>{props.description}</p>
      </section>
    </article>
  );
}

export default RecipeCard;