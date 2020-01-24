import { IDInt, ISODate } from './ts-alias.type';

export interface Quote {
  id: IDInt;
  text: number;
  userId: IDInt;
  authorIds: IDInt[];
  tagIds: IDInt[];
  createdAt: ISODate;
  updatedAt: ISODate;
}
