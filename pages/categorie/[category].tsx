import { GetServerSideProps } from "next";

const RandomChuckNorrisJoke: React.FC<{joke: string;}> = ({ joke }) => {
  return (
    <div>
      {joke}
    </div>
  )
}
export default RandomChuckNorrisJoke;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params.category
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  const joke = await response.json();
  console.log(joke)
  return {
    props: {
      joke: joke.value,
    },
  };
};
