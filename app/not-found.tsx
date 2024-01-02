import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-48">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg text-gray-600">
          Oops! Page is under construction. 👷‍♂️🚧
        </p>
        <p className="mt-4 text-gray-600 text-lg font-semibold">
          <Link href="/" className="text-blue-500">
            Back
          </Link>{" "}
          to home page.
        </p>
      </div>
    </div>
  );
}
