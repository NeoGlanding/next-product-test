import Link from "next/link";
import { useState } from "react";
import nextProductApi from "../../lib/api/nextProduct";
import productApi from "../../lib/api/products";

const Product = (props) => {
  const { data } = props;

  const [formState, setFormState] = useState({ name: "", description: "" });

  const handlerFunction = (e) => {
    const { name, value } = e.target;
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    let message = "";
    try {
      e.preventDefault();
      const { name, description } = formState;
      await nextProductApi.postProduct({ name, description });
      message = "Success";
    } catch (error) {
      message = "failed";
    } finally {
      alert(message);
    }
  };

  return (
    <>
      <div>
        {data.map(({ id, name }) => (
          <Link key={id} href={`/products/${id}`}>
            <p style={{ margin: "2rem 0" }} key={id}>
              {name}
            </p>
          </Link>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handlerFunction}
          />
          <textarea
            type="text"
            name="description"
            value={formState.description}
            onChange={handlerFunction}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const { data } = await productApi.getProduct();
    return {
      props: {
        data,
      },
      revalidate: 5,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Product;
