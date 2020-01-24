import { IDInt, ISODate } from './ts-alias.type';

export enum EApiKeyAccessLevel {
  Read  = 'read',
  Write = 'write',
}


export interface ApiKey {
  id: IDInt;
  userId: IDInt;
  accessLevel: EApiKeyAccessLevel;
  createdAt: ISODate;
  updatedAt: ISODate;
  deletedAt?: ISODate;
}
