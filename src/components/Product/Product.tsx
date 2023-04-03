type Props = {
  id: number;
  title: string;
  desc: string;
  price: number;
  addNewOrder: (id: number) => void;
  mult: { [id: number]: number };
};
const Product = ({ id, title, desc, price, addNewOrder, mult }: Props) => {
  return (
    <div className="product" key={id}>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>

      <div className="price">{mult[id] ? mult[id] : price}</div>
      <button className="btn-buy" onClick={() => addNewOrder(id)}>
        Buy
      </button>
    </div>
  );
};
export default Product;
