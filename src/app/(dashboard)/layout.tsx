export const metadata = {
  title: 'dashboard',
  description: 'dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>dashboard Header</h1><hr />
        {children} <hr />
        <h4>............dashboard Footer..............</h4>
        </body>
    </html>
  )
}
