// Modules
import { sign } from "jsonwebtoken";

export function generateToken (id:string) {
  return sign({ id }, process.env.SECRET_KEY!);
}