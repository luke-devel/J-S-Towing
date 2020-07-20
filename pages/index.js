import Head from "next/head";
import TruckImage from "../components/TruckImage";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link href="../assets/dist/css/bootstrap.css" rel="stylesheet" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"
        ></script>
        <title>
          J&S Towing and Recovery - Lock Outs, Jump Starts, Winching, Towing
          Medium Duty, San Marcos, TX, Texas
        </title>
      </Head>
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About</h4>
                <p class="text-muted">
                  Towing Service and Recovery company located in the San Marcos
                  and surrounding area. We specialize in vehicle lock outs, jump
                  starts, winching, and towing on medium duty as well.
                </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                <ul class="list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/pages/category/Towing-Service/JS-Towing-and-Recovery-100630971540968/"
                      class="text-white"
                    >
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jefferywwebb@yahoo.com" class="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                aria-hidden="true"
                class="mr-2"
                viewBox="0 0 24 24"
                focusable="false"
              ></svg>
              <img
                src="https://lh5.googleusercontent.com/-AAH0DJWczwI/AAAAAAAAAAI/AAAAAAAAAAA/8hgQQGoLDDQ/s44-p-k-no-ns-nd/photo.jpg"
                style={{ paddingRight: "10px" }}
              ></img>
              <strong>J&S Towing and Recovery</strong>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main role="main">
        <section class="jumbotron text-center" style={{ paddingTop: "20px" }}>
          <div class="container">
            <h1 padding>J&S Towing and Recovery San Marcos, TX</h1>
            <TruckImage></TruckImage>
            <h1 style={{ fontSize: "25px" }}>
              Towing Service and Recovery company located in the San Marcos and
              surrounding area. We specialize in vehicle lock outs, jump starts,
              winching, and towing on medium duty as well.
            </h1>

            <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>
              Contact by Email or Phone:
            </h1>
            <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>
              Email: jefferywwebb@yahoo.com
            </h1>
            <h1 style={{ fontSize: "20px" }}>
              <a href="mailto:jefferywwebb@yahoo.com" class="text-white">
                (Click to Email)
              </a>
            </h1>
            <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>
              Phone Number: (210) 807-2603
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
