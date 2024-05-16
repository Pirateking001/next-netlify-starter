import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog Post</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            line-height: 1.6;
            color: #666;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888;
        }
    </style>
      </Head>

      <main>
            <article>
                <h2> RC Blog Post</h2>
                <p>Lnnnnorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ultrices purus. Ut varius, libero et efficitur rutrum, magna augue tincidunt mi, eget auctor sapien urna non justo.</p>
                <p>Sed id dolor non quam varius malesuada. Nulla facilisi. Phasellus non libero sit amet magna facilisis eleifend.</p>
                <p>Proin ut risus vel ligula volutpat efficitur. Sed sed semper dolor. Integer tincidunt, justo nec suscipit pulvinar, velit sem accumsan justo, sit amet elementum orci turpis non justo.</p>
            </article>
      </main>
 <footer class="footer">
            <p>&copy; 2024 My Blog</p>
        </footer>
      <Footer />
    </div>
  )
}
