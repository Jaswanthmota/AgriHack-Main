import classes from "./Home.module.css";
function Home() {
  return (<div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner car">
          <div class="carousel-item  r-1 p-5 mb-5 mt-5 active">
            <div class="row align-items-center justify-content-between abouth">
              <div
                class="col-md mb-5 px-5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img src="./4.png" class="img-fluid" alt="..." />
              </div>
              <div
                class="col-md pb-5"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h1 className="text-warning text-center">
                  <img src="./fresh.jpg" alt="..." style={{ width: "80%" }} />
                </h1>
                <br />
                <h1 className="text-dark text-center">
                  <img src="./money.jpg" alt="..." style={{ width: "60%" }} />
                </h1>
              </div>
            </div>
          </div>
          <div class="carousel-item r-1 p-5 mb-5 mt-5 ">
            <div class="row align-items-center justify-content-between abouth">
              <div
                class="col-md pb-5"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-warning text-center">
                  <img src="./app.jpg" alt="..." style={{ width: "90%" }} />
                </h2>
                <br />
                <h4 className="text-dark text-center">
                  With no middle man we help in communication between dairy
                  farmers and customers.
                </h4>
              </div>
              <div
                class="col-md mb-5 px-5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img src="./5.png" class="img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div class="carousel-item r-1 car">
            <div class="row align-items-center justify-content-between m-5">
              <div
                class="col-md mt-4 px-5 py-4"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img
                  src="./10.png"
                  class="img-fluid "
                  className={classes.carimg}
                  alt="..."
                />
              </div>
              <div
                class="col-md pb-5"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-warning text-center">
                  <img
                    src="./services.jpg"
                    alt="..."
                    style={{ width: "80%" }}
                  />
                </h2>
                <br />
                <h4 className="text-dark text-center">
                  No minimum orders.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container mt-5" className={classes.div}>
        <div className={classes.bor}>
          <h1
            class="text-center p-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./chooseus.jpg" alt="..." style={{ width: "30%" }} />
          </h1>
          <div class="row align-items-center justify-content-between p-3">
            <div
              class="col-md mb-5 px-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src="./pro.jpg" class="img-fluid" alt="..." />
            </div>
            <div
              class="col-md pb-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h5 class="text-dark text-center" className={classes.about}>
                We bring farm-fresh milk and dairy products at your door. Our
                farm-to-finished approach makes sure there is no middleman
                between dairy farmer and you.We also help in expansion of market
                linkage for dairy farmers by helping in selling their products
                online.
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h1
          class="text-center mb-5"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src="./keyhead.jpg" alt="..." style={{ width: "30%" }} />
        </h1>
        <div class="row align-items-center justify-content-between p-3 ">
          <div
            class="col-md mb-5 px-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./market.jpg" class="img-fluid mb-5" alt="..." />
            <br />
            <h5 class="p-3" className={classes.para}>
              We help in expanding the market linkage of Dairy Farmers by
              helping them selling their products online and increassing their
              productivity.
            </h5>
          </div>
          <div
            class="col-md mb-5 px-5"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <img src="./easy.jpg" class="img-fluid mb-5" alt="..." />
            <br />
            <h5 class="p-3" className={classes.para}>
              Easing usage of web application for customers to buy the products.
            </h5>
          </div>
          <div
            class="col-md m-5 p-5"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="2000"
          >
            <img src="./refund.jpg" class="img-fluid" alt="..." />
            <h5 class="p-3" className={classes.para}>
              Refund of payment is issued in case of any issue related to
              product.
            </h5>
          </div>
        </div>
      </div>
      <div className={classes.sub}>
        <div className="container text-center fw-bold p-5 m-5">
          <h2 className={classes.stl1} data-aos="fade-right"
          data-aos-duration="1500">
            With <span className="bg-danger"> good quality</span> of products and{" "}
            <span className="bg-danger">user experience</span> ,<br />
            we leave no excuses for you not to try us.
          </h2>
          <h5 className={classes.stl} data-aos="fade-right"
          data-aos-duration="1500">
            Provide your mail address to subsribe :
          </h5>
          <div class="input-group mb-3" data-aos="fade-right"
          data-aos-duration="1500">
            <input
              type="mail"
              class="form-control"
              placeholder="Customer Mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button class="input-group-text" id="basic-addon2">
              @example.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
