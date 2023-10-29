export type Owner = {
  id?: string;
  firebase_uid?: string;
  email: string;
  phone_number: string;
  last_name: string;
  first_name: string;
};

export type CreateOwner = Owner;

export type SignInType = {
  email: string,
  password: string
}

export type SignUpType = Omit<Owner, "id" | "firebase_uid"> & { password: string }