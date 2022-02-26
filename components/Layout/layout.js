import Footer from "../Footer";
import Navigation from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <section>
        <Navigation />
      </section>
      <section>
        <main>{children}</main>
      </section>
      <section>
          <Footer/>
      </section>
    </>
  );
}
