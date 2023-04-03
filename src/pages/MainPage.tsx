import { productsArray } from "../utils/productsArray";
import "../components/Product/ProductList.scss";
import { useState } from "react";
import Product from "../components/Product/Product";

type Props = {};

type OrderList = {
  [id: number]: number;
};

type Mult = {
  [id: number]: number;
};

const MainPageWithRequest = (props: Props) => {
  const API_KEY = "PHO2OabY2CxFjvU2naJ5e9msaeY8l4Gw";

  const [orderList, setNewOrder] = useState<OrderList>({});
  const [mult, setMult] = useState<Mult>([]);

  let myHeaders = new Headers();
  myHeaders.append("apikey", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: {
      apikey: API_KEY,
    },
  };

  const addNewOrder = (id: number) => {
    const count = orderList[id] ? orderList[id] : (orderList[id] = 0);
    setNewOrder((prevState) => ({
      ...prevState,
      [id]: count + 1,
    }));
  };

  console.log(mult);
  console.log(orderList);

  const selectNewCurrency = (e: any) => {
    productsArray.map(async ({ id, price }) => {
      try {
        const res = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${e.target.innerHTML}&from=USD&amount=${price}`,
          requestOptions
        );
        const data = await res.json();
        setMult((prevState) => ({
          ...prevState,
          [id]: Math.round(data.result),
        }));
      } catch (error) {
        return console.log("error", error);
      }
    });
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
        <button className="btn-uah" onClick={(e) => selectNewCurrency(e)}>
          UAH
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
              (mult[Number(el)]
                ? Math.round(mult[Number(el)])
                : productsArray[Number(el) - 1].price);
          return accumulator;
        }, 0)}
      </div>
    </>
  );
};
export default MainPageWithRequest;
