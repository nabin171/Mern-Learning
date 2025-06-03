"use client";

import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "../components/ui/badge"; // or adjust the path as needed

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  {
    name: "Electronics",
    items: [
      { name: "Smartphones", href: "/electronics/smartphones" },
      { name: "Laptops", href: "/electronics/laptops" },
      { name: "Headphones", href: "/electronics/headphones" },
      { name: "Cameras", href: "/electronics/cameras" },
    ],
  },
  {
    name: "Fashion",
    items: [
      { name: "Men's Clothing", href: "/fashion/mens" },
      { name: "Women's Clothing", href: "/fashion/womens" },
      { name: "Shoes", href: "/fashion/shoes" },
      { name: "Accessories", href: "/fashion/accessories" },
    ],
  },
  {
    name: "Home & Garden",
    items: [
      { name: "Furniture", href: "/home/furniture" },
      { name: "Kitchen", href: "/home/kitchen" },
      { name: "Garden", href: "/home/garden" },
      { name: "Decor", href: "/home/decor" },
    ],
  },
];

export default function Component() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    S
                  </span>
                </div>
                <span className="font-bold text-xl">ShopHub</span>
              </Link>
              <div className="flex flex-col space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                      {category.name}
                    </h4>
                    <div className="flex flex-col space-y-1 pl-4">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <Link
                  href="/deals"
                  className="block text-sm font-medium hover:text-primary"
                >
                  Deals
                </Link>
                <Link
                  href="/new-arrivals"
                  className="block text-sm font-medium hover:text-primary"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/brands"
                  className="block text-sm font-medium hover:text-primary"
                >
                  Brands
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">
            ShopHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger className="h-9">
                  {category.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {category.items.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/deals"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Deals
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/new-arrivals"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  New Arrivals
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              3
            </Badge>
            <span className="sr-only">Wishlist</span>
          </Button>

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="w-full">
                  My Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/wishlist" className="w-full">
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings" className="w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login" className="w-full">
                  Sign In
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              2
            </Badge>
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
