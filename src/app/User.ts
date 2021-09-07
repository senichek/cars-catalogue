import { Car } from "./Car";

export interface User {
    _id?: number;
    email: string;
    password: string;
    favCars?: Car[];
  }
