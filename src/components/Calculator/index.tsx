import { useState, useEffect } from "react";
import InputField from "../InputField";

export default function Calculator() {
  const [formField, setFormField] = useState({
    goldPrice: 0,
    makingCharge: 0,
    vat: 0,
    totalGram: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const onChange = (e) => {
    console.log(e.target.name, e.target.valueAsNumber);
    setFormField({ ...formField, [e.target.name]: e.target.valueAsNumber });
  };
  const calcTotal = (newVal) => {
    const totalGoldVal = newVal.goldPrice * newVal.totalGram;
    const totalMC = totalGoldVal * (newVal.makingCharge / 100);
    const totalExcVat = totalGoldVal + totalMC;
    const totalVat = totalExcVat * (newVal.vat / 100);
    const newTotalPrice = totalExcVat + totalVat;
    setTotalPrice(newTotalPrice);
  };
  useEffect(() => {
    calcTotal(formField);
  }, [formField]);

  return (
    <form className="p-4 flex flex-col w-[500px] mx-auto">
      <div className="flex flex-nowrap justify-between items-center w-full">
        <div className="w-full md:w-1/2 block p-2">
          <InputField
            name="goldPrice"
            id="goldPrice"
            type="number"
            label={"Gold Price"}
            value={formField.goldPrice}
            onChange={onChange}
          />
        </div>
        <div className="w-full md:w-1/2 block p-2">
          <InputField
            name="vat"
            id="vat"
            type="number"
            label={"Vat"}
            value={formField.vat}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-nowrap justify-between items-center w-full">
        <div className="w-full md:w-1/2 block p-2">
          <InputField
            name="makingCharge"
            id="makingCharge"
            type="number"
            label={"Making charge"}
            value={formField.makingCharge}
            onChange={onChange}
          />
        </div>
        <div className="w-full md:w-1/2 block p-2">
          <InputField
            name="totalGram"
            id="totalGram"
            type="number"
            label={"Total Gram"}
            value={formField.totalGram}
            onChange={onChange}
          />
        </div>
        <div className="w-full md:w-1/2 block p-2">
          <InputField
            name="totalPrice"
            id="totalPrice"
            type="text"
            label={"Total Price"}
            value={totalPrice}
            readOnly
          />
        </div>
      </div>
    </form>
  );
}
