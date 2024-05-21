import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 bg-library-splash bg-no-repeat bg-center">
      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle>Welcome to Frontend</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Button>Sign In</Button>
        </CardContent>
      </Card>
    </main>
  );
}
