import { EntityIdentifier } from "../entity-identifier";

export type InventoryEntity = {
  id: EntityIdentifier;
  name: string;
  description: string;
  realPrice: number;
  quantity: number;
  createdAt: Date;
  modifiedAt: Date;
};
