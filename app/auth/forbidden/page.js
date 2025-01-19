// app/auth/forbidden/page.js
export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Access Denied
        </h2>
        <p className="text-center">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}
