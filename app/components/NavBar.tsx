import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  const navBarId = "navbarNavAltMarkup";

  return (
    <div className="position-fixed w-100 top-0 z-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Mon Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${navBarId}`}
            aria-controls={navBarId}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id={navBarId}>
            <div className="navbar-nav">
              {links.map((link) => (
                <Link key={link.href} className="nav-link" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
