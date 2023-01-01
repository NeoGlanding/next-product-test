import productApi from "../../lib/api/products";

const ProductDetail = (props) => {
  const { data } = props;
  const { name, description } = data;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await productApi.getProductDetail(id);
  try {
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
