import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/groceries">Groceries</Link></li>
              <li><Link href="/restaurants">Restaurants</Link></li>
              <li><Link href="/category/fresh-produce">Fresh Produce</Link></li>
              <li><Link href="/offers">Offers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/returns">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FoodCommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
