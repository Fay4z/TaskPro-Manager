import * as React from "react";

import { cn } from "@/lib/utils";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { useLogout } from "@/hooks/useLogout";
import { useAuthContext } from "@/hooks/useAuthContext";

function DummyLayout() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">TaskPro</span>
          </Link>
          <NavLink
            to="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </NavLink>
          {user && (
            <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <NavLink
                to="/tasks"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Tasks
              </NavLink>
            </div>
          )}
          {!user && (
            <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <NavLink
                to="/login"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="text-muted-foreground hover:text-foreground"
              >
                Signup
              </NavLink>
            </div>
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">TaskPro</span>
              </Link>
              <NavLink to="/" className="hover:text-foreground">
                Dashboard
              </NavLink>
              {user && (
                <div className="grid gap-6 text-lg font-medium">
                  <NavLink
                    to="/tasks"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Tasks
                  </NavLink>
                  <NavLink className="text-muted-foreground transition-colors hover:text-foreground">
                    {user.email}
                  </NavLink>
                  <NavLink
                    onClick={handleClick}
                    to="/login"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Log out
                  </NavLink>
                </div>
              )}
              {!user && (
                <div className="grid gap-6 text-lg font-medium">
                  <NavLink
                    to="/login"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Signup
                  </NavLink>
                </div>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        {user && (
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search tasks..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Email: {user.email}</DropdownMenuItem>
                  <DropdownMenuItem>Username: {user.username}</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <NavLink
                      onClick={handleClick}
                      to="/login"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Log out
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ModeToggle />
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DummyLayout;
