import Product from "../components/Product/Product";
import { productsArray } from "../utils/productsArray";
import "../components/Product/ProductList.scss";
import { useState } from "react";
import { currencyList, rates } from "../utils/rates";

type Props = {};

type OrderList = {
  [id: number]: number;
};
const MainPage = (props: Props) => {
  //   const BASE_URL = "https://api.exchangeratesapi.io/latest";
  //   const API_KEY = "PHO2OabY2CxFjvU2naJ5e9msaeY8l4Gw";

  const [orderList, setNewOrder] = useState<OrderList>({});
  const [currencySelected, setNewCurrency] = useState(currencyList[0]);
  const [mult, setMult] = useState<number>(1);

  const addNewOrder = (id: number) => {
    const count = orderList[id] ? orderList[id] : (orderList[id] = 0);
    setNewOrder((prevState) => ({
      ...prevState,
      [id]: count + 1,
    }));
  };

  const getMultiplier = (newCur: string) => {
    setMult(rates[newCur]);
  };

  const selectNewCurrency = (e: any) => {
    setNewCurrency((prevState) => (prevState = e.target.innerHTML));
    getMultiplier(e.target.innerHTML);
  };

  return (
    <>
      <h1 className="page-title">Shop page title</h1>

      <div className="currency-list">
        <button className="btn-usd" onClick={(e) => selectNewCurrency(e)}>
          USD
        </button>
        <button className="btn-eur" onClick={(e) => selectNewCurrency(e)}>
          EUR
        </button>
        <button className="btn-uan" onClick={(e) => selectNewCurrency(e)}>
          UAN
        </button>
        <button className="btn-pln" onClick={(e) => selectNewCurrency(e)}>
          PLN
        </button>
      </div>

      <div className="product-list">
        {productsArray.map(({ id, title, desc, price }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              desc={desc}
              price={price}
              addNewOrder={addNewOrder}
              mult={mult}
            />
          );
        })}
      </div>

      <div className="total">
        Total:{" "}
        {Object.keys(orderList).reduce((accumulator, el) => {
          accumulator =
            accumulator +
            Number(orderList[Number(el)]) *
              (productsArray[Number(el) - 1].price * mult);
          return accumulator;
        }, 0)}
      </div>
    </>
  );
};
export default MainPage;
