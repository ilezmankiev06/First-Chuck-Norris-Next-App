import { GetServerSideProps } from "next";
import Link from "next/link";
const RandomChuckNorrisCategories: React.FC<{ category: string[] }> = (
  props
) => {
  return (
    <>
      <div>
        {props.category.map((categorie, id) => {
          return (
            <div key={id}>
              <p>
                <Link href={`categorie/${categorie}`}>{categorie}</Link>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RandomChuckNorrisCategories;
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const category = await response.json();
  console.log(category);
  // const result = category.join(" ");
  return {
    props: {
      category: category,
    },
  };
};
