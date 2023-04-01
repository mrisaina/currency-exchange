type Props = {
  id: number;
  title: string;
  desc: string;
  price: number;
  addNewOrder: (id: number) => void;
  mult: number;
};
const Product = ({ id, title, desc, price, addNewOrder, mult }: Props) => {
  return (
    <div className="product" key={id}>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="price">{(price * mult).toFixed(1)}</div>
      <button className="btn-buy" onClick={() => addNewOrder(id)}>
        Buy
      </button>
    </div>
  );
};
export default Product;
