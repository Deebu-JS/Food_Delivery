import Link from "next/link"

export default function CustomerServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>›</span>
        <span className="text-foreground">Customer Service</span>
      </div>
      <h1 className="text-3xl font-bold mb-4">Customer Service</h1>
      <p className="text-gray-600 mb-8">How can we help you today? Find answers or get in touch with our team.</p>
      <div className="bg-white p-8 rounded-xl shadow-sm border text-center text-gray-500">
        <p className="text-xl mb-4">Demo Page: Customer Service</p>
        <p>This is a placeholder page for the "Customer Service" navigation link.</p>
      </div>
    </div>
  )
}
