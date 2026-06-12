import { DefaultSession, DefaultUser, JWT as NextAuthJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }

  interface User extends DefaultUser {
    id: string;
  }

  interface JWT extends NextAuthJWT {
    id: string;
  }
}
