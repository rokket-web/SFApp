import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="text-2xl font-semibold text-foreground">
        Welcome to the SF App
      </h1>
      <Show when="signed-out">
        <div className="flex items-center gap-3">
          <SignInButton>
            <button className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:opacity-90">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
              Sign up
            </button>
          </SignUpButton>
        </div>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}
