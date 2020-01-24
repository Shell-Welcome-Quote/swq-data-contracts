import { IDInt, ISODate } from './ts-alias.type';

export interface User {
  id: IDInt;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: ISODate;
  updatedAt: ISODate;
}
