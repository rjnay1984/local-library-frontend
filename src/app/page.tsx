import { auth, signIn, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 bg-library-splash bg-no-repeat bg-center">
      <pre className="whitespace-pre-line break-all bg-white bg-opacity-80 p-4 rounded-lg">
        {JSON.stringify(session, null, 2)}
      </pre>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>
            Welcome to Local Library{session?.user && `, ${session.user.name}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {session ? (
            <form
              action={async () => {
                'use server';

                await signOut();
              }}
            >
              <Button>Sign Out</Button>
            </form>
          ) : (
            <form
              action={async () => {
                'use server';

                await signIn('authentik');
              }}
            >
              <Button>Sign In</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
