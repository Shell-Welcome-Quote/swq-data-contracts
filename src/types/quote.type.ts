import { IDInt, ISODate } from './ts-alias.type';

export interface Quote {
  id: IDInt;
  /**
   * The text of the quote
   */
  text: number;
  /**
   * Optional quote description
   */
  description?: string;
  /**
   * Owner of the quote
   */
  userId: IDInt;
  authorIds: IDInt[];
  tagIds: IDInt[];
  createdAt: ISODate;
  updatedAt: ISODate;
}
