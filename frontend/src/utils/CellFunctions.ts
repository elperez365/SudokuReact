export const ControlMinMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  let controlledValue: number = 0;
  const value = e.target.value;

  if (value === "") {
    controlledValue = 0;
  }
  if (+value < 0) {
    controlledValue = 0;
  }
  if (+value > 9) {
    controlledValue = +value[0];
  }
  if (+value > 0 && +value < 10) {
    controlledValue = parseInt(value);
  }
  if (value.length > 2 && value[0] === "0") {
    controlledValue = 0;
  }

  return controlledValue;
};
