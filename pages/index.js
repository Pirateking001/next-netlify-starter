import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RC Blog Post!</title>
        <meta
          name="description"
          content="A blog post about RC (Remote Control) technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <article>
          <h2>RC Blog Post</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            eget ultrices purus. Ut varius, libero et efficitur rutrum, magna
            augue tincidunt mi, eget auctor sapien urna non justo.
          </p>
          <p>
            Sed id dolor non quam varius malesuada. Nulla facilisi. Phasellus
            non libero sit amet magna facilisis eleifend.
          </p>
          <p>
            Proin ut risus vel ligula volutpat efficitur. Sed sed semper dolor.
            Integer tincidunt, justo nec suscipit pulvinar, velit sem accumsan
            justo, sit amet elementum orci turpis non justo.
          </p>
        </article>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Blog</p>
      </footer>

      <Footer />
    </div>
  );
}
