import bcrypt from "bcryptjs";

export const users = [
  {
    id: "1",
    email: "test@example.com",
    password: bcrypt.hashSync("password123", 10),
  },
];

export function findUserByEmail(email: string) {
  return users.find((u) => u.email === email);
}
