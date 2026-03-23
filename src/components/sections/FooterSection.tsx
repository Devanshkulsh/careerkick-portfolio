const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-5 backdrop-blur-md sm:py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-xs leading-6 text-muted-foreground sm:text-sm">
          &copy; {year} All rights reserved. Developed by{" "}
          <a
            href="https://ntechzy.in"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Ntechzy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
