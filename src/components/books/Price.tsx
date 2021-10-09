import React, { FC, useState } from "react";
import CurrencyInput, { formatValue } from "react-currency-input-field";
import { CurrencyInputProps } from "react-currency-input-field";
import { CurrencyInputOnChangeValues } from "react-currency-input-field/dist/components/CurrencyInputProps";

type PriceProps = {
  onPriceChange: (price: string) => void;
  currentPrice: string;
};

export const Price: React.FC<PriceProps> = (props) => {
  const prefix = "Rs";
  const [errorMessage, setErrorMessage] = useState("");
  const [className, setClassName] = useState("");
  const [value, setValue] = useState<string | number>(0);
  const [values, setValues] = useState<CurrencyInputOnChangeValues>();
  const [rawValue, setRawValue] = useState<string | undefined>(" ");
  /**
   * Handle validation
   */
  const handleOnValueChange: CurrencyInputProps["onValueChange"] = (
    value,
    _,
    values
  ): void => {
    setValues(values);
    setRawValue(value === undefined ? "undefined" : value || " ");
    if (!value) {
      setClassName("");
      setValue("");
      return;
    }
    if (Number.isNaN(Number(value))) {
      setErrorMessage("Please enter a valid number");
      setClassName("is-invalid");
      return;
    }
    setClassName("is-valid");
    setValue(value);
    props.onPriceChange(value);
  };

  console.log(props.currentPrice);
  return (
    <div className="row">
      <div className="col-12 mb-4">
        ​
        <form className="needs-validation">
          <div className="row">
            <div className="form-group col">
              <label>Price</label>
              <CurrencyInput
                id="validationCustom01"
                name="input-1"
                className={`form-control ${className}`}
                value={props.currentPrice != "0" ? props.currentPrice : value}
                onValueChange={handleOnValueChange}
                placeholder="Please enter a number"
                prefix={prefix}
                step={1}
              />
              <div className="invalid-feedback">{errorMessage}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Price;
