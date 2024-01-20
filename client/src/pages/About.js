import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3><b>Welcome to ECOMMERCE SPHERE - Where Style Meets Convenience!</b></h3>
          <p className="text-justify mt-2">
            

             At ECOMMERCE SPHERE, we believe in more than just shopping; we believe
            in creating an unparalleled online shopping experience that
            seamlessly combines fashion, quality, and convenience. As your go-to
            destination for all things stylish, we're here to redefine the way
            you shop, offering a curated selection of products that not only
            elevate your wardrobe but also simplify your life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
