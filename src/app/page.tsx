import { SignIn, Show, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6">
      <Show when="signed-out">
        <SignIn />
      </Show>
      <Show when="signed-in">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            Welcome to the SF App
          </h1>
          <UserButton />
        </div>
      </Show>
    </div>
  );
}
