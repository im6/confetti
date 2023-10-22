import { Car } from "./interface";

const getCallName = (car: Car): string => {
  return `${car.name} + ${car.color};`;
};

export default getCallName;
