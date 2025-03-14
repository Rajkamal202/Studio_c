export default function Documentation() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Documentation</h1>
  
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Setup Instructions</h2>
              <div className="rounded-lg bg-white/10 p-6">
                <ol className="list-decimal space-y-4 pl-5">
                  <li>
                    <strong>Clone the repository</strong>
                    <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                      <code>git clone https://github.com/yourusername/coupon-system.git</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Install dependencies</strong>
                    <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                      <code>npm install</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Run the development server</strong>
                    <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                      <code>npm run dev</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Deploy to Vercel</strong>
                    <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-sm">
                      <code>vercel</code>
                    </pre>
                  </li>
                </ol>
              </div>
            </section>
  
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Abuse Prevention Strategies</h2>
              <div className="rounded-lg bg-white/10 p-6">
                <h3 className="mb-3 text-xl font-medium">IP Address Tracking</h3>
                <p className="mb-4">
                  The system records the IP address of each user who claims a coupon. This prevents users from claiming
                  multiple coupons by refreshing the page or using different browser sessions.
                </p>
  
                <h3 className="mb-3 text-xl font-medium">Cookie-Based Tracking</h3>
                <p className="mb-4">
                  A unique identifier is stored in the user's browser cookies. This provides an additional layer of
                  tracking to prevent abuse, even if the user attempts to change their IP address.
                </p>
  
                <h3 className="mb-3 text-xl font-medium">Time Restrictions</h3>
                <p className="mb-4">
                  Users are limited to claiming one coupon per hour. The system tracks the timestamp of each claim and
                  enforces a cooldown period before the same user can claim another coupon.
                </p>
  
                <h3 className="mb-3 text-xl font-medium">Combined Approach</h3>
                <p>
                  By combining IP tracking, cookie tracking, and time restrictions, the system effectively prevents common
                  abuse tactics. A user would need to use a different device, clear cookies, and change their IP address
                  to bypass these restrictions.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="mb-4 text-2xl font-semibold">System Architecture</h2>
              <div className="rounded-lg bg-white/10 p-6">
                <h3 className="mb-3 text-xl font-medium">Round-Robin Distribution</h3>
                <p className="mb-4">
                  Coupons are distributed in a sequential, round-robin fashion. After the last coupon is claimed, the
                  system starts again from the first coupon, ensuring fair and even distribution.
                </p>
  
                <h3 className="mb-3 text-xl font-medium">Data Storage</h3>
                <p className="mb-4">The system uses file-based storage for simplicity, with two JSON files:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <code>coupons.json</code> - Stores the available coupons
                  </li>
                  <li>
                    <code>claims.json</code> - Records all coupon claims with user identifiers and timestamps
                  </li>
                </ul>
                <p className="mt-4">
                  In a production environment, this would be replaced with a database for better performance and
                  reliability.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  