import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "spartan",
    email: "spartan@karthi.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "test user",
    email: "test@test.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
