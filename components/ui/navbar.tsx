"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MegaNavCategory = {
  title: string;
  items: { title: string; href: string }[];
};

const navItems = [
  // {
  //   title: "Platform",
  //   submenu: {
  //     featured: [
  //       {
  //         title: "Client Platform",
  //         description: "Complete digital solution for managing your business",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/solutions/platform/client-digital-platform",
  //         color: "from-blue-500/20 to-purple-500/20",
  //       },
  //       {
  //         title: "Developer Platform",
  //         description: "Powerful tools and APIs for developers",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/solutions/platform/developer-platform",
  //         color: "from-emerald-500/20 to-cyan-500/20",
  //       },
  //     ],
  //     categories: [
  //       {
  //         title: "Core Features",
  //         items: [
  //           { title: "Project Management", href: "#" },
  //           { title: "Team Collaboration", href: "#" },
  //           { title: "Analytics Dashboard", href: "#" },
  //         ],
  //       },
  //       {
  //         title: "Integrations",
  //         items: [
  //           { title: "API Access", href: "#" },
  //           { title: "Webhooks", href: "#" },
  //           { title: "Custom Development", href: "#" },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    title: "Solutions",
    submenu: {
      featured: [
        {
          title: "Our Products",
          description: "Scalable solutions for large organizations",
          image: "/assets/images/nav-bar/products.jpg",
          href: "/solutions/products",
          color: "from-orange-500/20 to-red-500/20",
        },
        {
          title: "Custom Projects",
          description: "Tailored solutions for your unique needs",
          image: "/assets/images/nav-bar/projects.jpg",
          href: "/solutions/projects",
          color: "from-pink-500/20 to-rose-500/20",
        },
      ],
      categories: [
        {
          title: "Proof",
          items: [{ title: "Case studies", href: "/company/case-studies" }],
        },
        {
          title: "What we do",
          items: [
            { title: "Services", href: "/solutions/services" },
          ],
        }

      ],
    },
  },
  // {
  //   title: "Resources",
  //   submenu: {
  //     featured: [
  //       {
  //         title: "Editorial Hub",
  //         description: "Insights and updates from our experts",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/resources/editorial",
  //         color: "from-violet-500/20 to-indigo-500/20",
  //       },
  //       {
  //         title: "Documentation",
  //         description: "Comprehensive guides and references",
  //         image: "/placeholder.svg?height=200&width=300",
  //         href: "/resources/docs",
  //         color: "from-teal-500/20 to-emerald-500/20",
  //       },
  //     ],
  //     categories: [
  //       {
  //         title: "Learn",
  //         items: [
  //           { title: "Getting Started", href: "#" },
  //           { title: "Tutorials", href: "#" },
  //           { title: "Case Studies", href: "#" },
  //         ],
  //       },
  //       {
  //         title: "Support",
  //         items: [
  //           { title: "Help Center", href: "#" },
  //           { title: "Community", href: "#" },
  //           { title: "Status", href: "#" },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    title: "Company",
    submenu: {
      featured: [
        {
          title: "About Us",
          description: "Our story, mission, and values",
          image: "/assets/images/nav-bar/about-us.jpg",
          href: "/company/about",
          color: "from-blue-500/20 to-sky-500/20",
        },
        {
          title: "Contact Us",
          description: "Start Growing with Us!",
          image: "/assets/images/nav-bar/contact-us.jpg",
          href: "/company/contact",
          color: "from-green-500/20 to-emerald-500/20",
        },
      ],
      categories: [
        {
          title: "Get to Know Us",
          items: [
            { title: "Career", href: "/company/careers" },
            { title: "Partners", href: "/company/partners" },
          ],
        },
        {
          title: "Programs",
          items: [
            { title: "Growth program", href: "/company/programs/growth" },
            { title: "Consultancy", href: "/company/programs/consultancy" },
          ],
        },
      ],
    },
  },
  {
    title: "Out Sourcing",
    href: "/out-sourcing",
  },
];

const NAVBAR_SUBMENU_BRIDGE_MS = 240;
const MEGA_TRANSITION_MS = 260;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [desktopHoverTitle, setDesktopHoverTitle] = useState<string | null>(
    null
  );
  const [frozenMegaTitle, setFrozenMegaTitle] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const pillRef = useRef<HTMLDivElement>(null);
  const desktopHoverLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const clearDesktopHoverLeaveTimer = useCallback(() => {
    if (desktopHoverLeaveTimerRef.current) {
      clearTimeout(desktopHoverLeaveTimerRef.current);
      desktopHoverLeaveTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearDesktopHoverLeaveTimer(), [clearDesktopHoverLeaveTimer]);

  // Close submenu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setDesktopHoverTitle(null);
    setFrozenMegaTitle(null);
    clearDesktopHoverLeaveTimer();
  }, [pathname, clearDesktopHoverLeaveTimer]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setDesktopHoverTitle(null);
    setFrozenMegaTitle(null);
    clearDesktopHoverLeaveTimer();
  };

  const scheduleDesktopHoverClear = () => {
    clearDesktopHoverLeaveTimer();
    desktopHoverLeaveTimerRef.current = setTimeout(() => {
      setDesktopHoverTitle(null);
    }, NAVBAR_SUBMENU_BRIDGE_MS);
  };

  const activeMegaTitle = desktopHoverTitle ?? openSubmenu;
  const activeMegaItem = navItems.find(
    (item) => item.submenu != null && item.title === activeMegaTitle
  );
  const megaVisibleDesktop =
    Boolean(activeMegaItem?.submenu) &&
    Boolean(desktopHoverTitle || openSubmenu);

  useEffect(() => {
    if (megaVisibleDesktop && activeMegaTitle) {
      setFrozenMegaTitle(activeMegaTitle);
    }
  }, [megaVisibleDesktop, activeMegaTitle]);

  useEffect(() => {
    if (!megaVisibleDesktop && frozenMegaTitle !== null) {
      const id = window.setTimeout(() => {
        setFrozenMegaTitle(null);
      }, MEGA_TRANSITION_MS);
      return () => clearTimeout(id);
    }
  }, [megaVisibleDesktop, frozenMegaTitle]);

  const megaPanelTitle =
    megaVisibleDesktop && activeMegaTitle ? activeMegaTitle : frozenMegaTitle;
  const megaPanelItem =
    megaPanelTitle == null
      ? undefined
      : navItems.find(
          (item) => item.submenu != null && item.title === megaPanelTitle
        );

  const megaShellOpen =
    megaVisibleDesktop || frozenMegaTitle !== null;

  const megaFeatured = megaPanelItem?.submenu?.featured ?? [];
  const megaCategories = megaPanelItem?.submenu?.categories ?? [];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex w-full max-w-[min(100%,56rem)] flex-col gap-2 px-4 pt-3 md:pt-4">
        <div
          ref={pillRef}
          className={cn(
            "relative z-[100] w-full",
            megaShellOpen &&
              "md:overflow-hidden md:rounded-3xl md:border md:border-border/50 md:bg-white md:p-1 md:shadow-lg dark:border-border/40 dark:md:bg-card"
          )}
          onMouseEnter={clearDesktopHoverLeaveTimer}
          onMouseLeave={scheduleDesktopHoverClear}
        >
          <div
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-full border border-border/50 bg-white px-3 py-2 shadow-md transition-all duration-300 md:gap-6 md:px-5 md:py-2.5 dark:border-border/40 dark:bg-card",
              megaShellOpen && "md:border-0 md:shadow-none",
              scrolled && "shadow-lg md:py-2",
              megaShellOpen && scrolled && "md:shadow-none"
            )}
          >
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="bg-gradient-to-r from-secondary via-accent to-tertiary bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl">
              Sydek
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:gap-7 md:flex">
            {navItems.map((item) => (
              <div key={item.title} className="shrink-0">
                {!item.submenu ? (
                  <Link
                    href={item.href!}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                      openSubmenu === item.title && "text-foreground"
                    )}
                    aria-expanded={openSubmenu === item.title}
                    onMouseEnter={() => setDesktopHoverTitle(item.title)}
                    onFocus={() => setDesktopHoverTitle(item.title)}
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 opacity-70" />
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative h-9 w-9 shrink-0 rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className={cn(
                "hidden rounded-full px-5 font-medium shadow-sm transition-all md:inline-flex",
                scrolled && "shadow-md"
              )}
            >
              <Link href="/company/contact">Start Growing</Link>
            </Button>

            <button
              type="button"
              className="rounded-full p-2 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

          {megaPanelItem?.submenu ? (
            <div
              className={cn(
                "hidden overflow-hidden md:grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                megaVisibleDesktop
                  ? "grid-rows-[1fr] opacity-100"
                  : "pointer-events-none grid-rows-[0fr] opacity-0"
              )}
              style={{
                transitionDuration: `${MEGA_TRANSITION_MS}ms`,
              }}
              aria-hidden={!megaVisibleDesktop}
            >
              <div className="min-h-0">
                <div
                  className="border-t border-border/40 bg-white px-5 py-6 dark:bg-card"
                  onMouseEnter={clearDesktopHoverLeaveTimer}
                >
                  <div className="mb-6 grid grid-cols-2 gap-6">
                    {megaFeatured.map((feature, index) => (
                      <Link
                        key={`${feature.title}-${index}`}
                        href={feature.href}
                        className="group/item relative overflow-hidden rounded-lg border p-3 transition-colors hover:border-secondary/50"
                        onClick={closeMenu}
                      >
                        <div className="relative mb-3 aspect-[2/1] overflow-hidden rounded-lg">
                          <div
                            className={cn(
                              "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity group-hover/item:opacity-30",
                              feature.color
                            )}
                          />
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            fill
                            className="object-cover transition-transform group-hover/item:scale-105"
                          />
                        </div>
                        <h3 className="mb-1 font-semibold transition-colors group-hover/item:text-secondary">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </Link>
                    ))}
                  </div>

                  {megaCategories.length > 0 ? (
                    <div className="grid grid-cols-2 gap-6 border-t border-border/40 pt-6">
                      {megaCategories.map((category, index) => (
                        <div key={index}>
                          <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subitem, subindex) => (
                              <li key={subindex}>
                                <Link
                                  href={subitem.href}
                                  className="group/link flex items-center text-sm hover:text-secondary"
                                  onClick={closeMenu}
                                >
                                  {subitem.title}
                                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="rounded-2xl border border-border/50 bg-white px-4 py-4 shadow-lg dark:border-border/40 dark:bg-card md:hidden">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="flex items-center justify-between py-2 text-sm font-medium"
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openSubmenu === item.title && "rotate-180"
                          )}
                        />
                      </button>
                      {openSubmenu === item.title && (
                        <div className="mt-2 flex flex-col space-y-1 border-l border-border pl-4">
                          {item.submenu?.featured?.map((feature, index) => (
                            <Link
                              key={index}
                              href={feature.href}
                              className="py-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
                              onClick={closeMenu}
                            >
                              {feature.title}
                            </Link>
                          ))}
                          {item.submenu?.categories?.map((category) =>
                            category.items.map((subitem, index) => (
                              <Link
                                key={`${category.title}-${index}`}
                                href={subitem.href}
                                className="py-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
                                onClick={closeMenu}
                              >
                                {subitem.title}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Button
                asChild
                variant="secondary"
                className="mt-3 h-10 w-full rounded-full"
              >
                <Link href="/scoping" onClick={closeMenu}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
