import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - ExclusiveCoupons',
  description: 'Admin dashboard for the coupon distribution system'
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Manage your coupon distribution system
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Database Management
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Use these tools to manage your coupon database:
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/api/seed" target="_blank">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Seed Database
                    </Button>
                  </Link>
                  <Link href="/api/coupons" target="_blank">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View All Coupons
                    </Button>
                  </Link>
                  <Link href="/api/stats" target="_blank">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View System Stats
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                System Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The coupon system is now using MongoDB for data storage. This
                  provides:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Persistent storage across deployments</li>
                  <li>Better scalability for high traffic</li>
                  <li>Improved query performance</li>
                  <li>Data integrity and consistency</li>
                </ul>
                <div className="rounded-lg bg-white/5 p-4 mt-4">
                  <p className="text-sm">
                    <strong>Note:</strong> Make sure to set the{' '}
                    <code className="bg-gray-800 px-1 py-0.5 rounded">
                      MONGODB_URI
                    </code>{' '}
                    environment variable in your Vercel project settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">
              API Documentation
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  GET /api/coupons
                </h3>
                <p>Retrieves all active coupons in the system.</p>
                <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                  <code>{`{
               "success": true,
                "data": [
                { "code": "SAVE20", "description": "20% off your purchase" },
                { "code": "FREESHIP", "description": "Free shipping on your order" },
    ...
  ]
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  GET /api/stats
                </h3>
                <p>
                  Retrieves system statistics including total claims and unique
                  users.
                </p>
                <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                  <code>{`{
  "success": true,
  "data": {
    "totalClaims": 157,
    "recentClaims": 42,
    "uniqueUsers": 89
  }
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  GET /api/seed
                </h3>
                <p>
                  Seeds the database with sample coupons. Use with caution as
                  this will reset existing data.
                </p>
                <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                  <code>{`{
  "success": true,
  "message": "Database seeded successfully",
  "data": {
    "coupons": 8
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
