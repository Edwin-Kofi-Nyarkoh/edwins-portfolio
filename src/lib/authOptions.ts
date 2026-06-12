import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions, Session, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (
          user?.emailVerified &&
          user.password &&
          (await bcrypt.compare(password, user.password))
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials" && user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (existingUser?.provider === "credentials") {
          throw new Error(
            "Account already exists. Please log in with email and password."
          );
        }
      }

      return true;
    },
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: NextAuthUser;
    }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        (session.user as { id: string } & typeof session.user).id =
          token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      return session;
    },
  },
};
