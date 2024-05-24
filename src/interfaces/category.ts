export interface Category {
  _id: string;
  description: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const CategoryDataInit: Category = {
  _id: "",
  description: "",
  name: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};
