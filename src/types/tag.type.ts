import { IDInt } from './ts-alias.type';

export interface Tag {
  id: IDInt;
  name: string;
  /** Absent only in case of root tags */
  parentId?: IDInt;
}
