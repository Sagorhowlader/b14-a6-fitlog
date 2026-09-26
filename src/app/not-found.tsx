import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
      <h1 className="font-oswald text-6xl font-bold">404</h1>

      <div>
        <h2 className="text-3xl font-bold">PAGE NOT FOUND</h2>

        <p className="mt-2 text-base-content/60">
          The page you are looking for does not exist.
        </p>
      </div>

      <Link
        href="/"
        className="btn rounded-full bg-fitlog-primary px-6 text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}
