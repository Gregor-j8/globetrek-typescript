import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to GlobeTrek 🌍</h1>
      <p className="text-gray-600 mt-4">Start your journey by logging in or registering.</p>
      <div className="mt-8">
        <Link 
          href="/login" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go to Login
        </Link>
      </div>
    </main>
  )
}