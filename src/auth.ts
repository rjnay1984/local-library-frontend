/* eslint-disable no-unused-vars */
import NextAuth, { DefaultSession } from 'next-auth';
import Authentik from 'next-auth/providers/authentik';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    user: {
      groups: string[];
    } & DefaultSession['user'];
  }

  interface User {
    groups: string[]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Authentik({
    profile(profile) {
      return {
        ...profile,
        groups: profile.groups ?? ['user'],
      }
    }
  })],
  callbacks: {
    jwt({ token, user, account }) {
      let returnToken = token;
      if (user && account) {
        returnToken = { ...token, groups: user.groups, accessToken: account.access_token };
      }
      return returnToken;
    },
    session({ session, token }) {
      return { ...session, accessToken: token.accessToken, user: { ...session.user, groups: token.groups as string[] }};
    }
  }
});
