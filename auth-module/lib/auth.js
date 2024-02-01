import { hash, compare } from "bcryptjs";

async function hashPassword(password){
  const hashedPassword = await hash(password, 12);
  return hashedPassword
}

export async function verifyPassword(password, enteredPassword){
    const isValid = await compare(password, enteredPassword);
    return isValid;
}

export default hashPassword;