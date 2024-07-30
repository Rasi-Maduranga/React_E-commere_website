import React from 'react'
import './CSS/About.css'
import team4 from '../Component/Assets/team-member4.png'
import team1 from '../Component/Assets/team-member1.png'
import team2 from '../Component/Assets/team-member2.png'
import team3 from '../Component/Assets/team-member3.png'
import quote from '../Component/Assets/quote-icon.png'

const About = () => {
  return (
    <div>
        <div class="about-container">
      <div class="profile-image">
        <img src={team4} alt="" />
      </div>

      <div class="description">
        <p>
        Welcome to M Mobile, your one-stop destination for quality products and exceptional service. We pride ourselves on offering a diverse range of items that cater to all your needs, from fashion and electronics to home essentials and more.
        </p>
        <p>
        Our Story
        </p>
        <p>
        Founded in 2024, M Mobile started with a simple mission: to make shopping convenient, affordable, and enjoyable for everyone. We began as a small online store, and thanks to the support of our loyal customers, we have grown into a trusted name in eCommerce. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
        </p>
        <p>
        What We Offer
        </p>
        <p>
        Wide Selection: We offer an extensive range of products across various categories, ensuring that you can find exactly what you're looking for.
        Quality Assurance: Every item in our store is carefully selected and vetted to meet our high standards of quality and reliability.
        Competitive Prices: We strive to provide the best prices without compromising on quality, ensuring you get the best value for your money.
        Seamless Shopping Experience: Our user-friendly website and secure payment options make shopping easy and worry-free.
        Our Values
        </p>
        <p>
        Customer First: Your satisfaction is our top priority. We are committed to providing excellent customer service and support at every step of your shopping journey.
        Innovation: We continually update our inventory and technology to enhance your shopping experience, staying ahead of the latest trends and advancements.
        Integrity: We believe in transparent business practices and honest communication. Trust and integrity guide every decision we make.
        Join Our Community
        </p>
        <p>
        At M Mobile, we're more than just a store—we're a community. Join our family of satisfied customers and stay connected with us through our newsletter and social media channels for the latest updates, exclusive offers, and more.
        </p>
        <p>
        Thank you for choosing M Mobile. We look forward to serving you and making your shopping experience extraordinary.
        </p>
        <p>
        Contact Us
        </p>
        <p>
        For any inquiries, suggestions, or feedback, please feel free to reach out to our friendly customer service team at MMobile@gmail.com / 0786897386. We are here to assist you 24/7.
        </p>
        <p>
        Happy Shopping!
        </p>
        <p>
        M Mobile Team
        </p>
      </div>

      <div class="projects-container">
        <div class="project">
          <h3 class="project-name">Websites Designed</h3>
          <div class="project-number odometer websites-designed">0</div>
        </div>

        <div class="project">
          <h3 class="project-name">Apps Developed</h3>
          <div class="project-number odometer apps-developed">0</div>
        </div>
      </div>

      <h2 class="our-team-heading">Our Team</h2>

      <div class="our-team">
        <div class="team-member">
          <img src={team1} alt="" />
          <div class="designation">
            <strong>Alice J.,</strong> (Project Manager)
          </div>
        </div>

        <div class="team-member">
          <img src={team2} alt="" />
          <div class="designation">
            <strong>Dave B.,</strong> (Lead Designer)
          </div>
        </div>

        <div class="team-member">
          <img src={team3} alt="" />
          <div class="designation">
            <strong>Jeniffer A.,</strong> (Lead Programmer)
          </div>
        </div>
      </div>

      <div class="our-mission">
        <img class="quote-icon" src={quote} alt="" />
        <p>Our mission is to provide the best services to our clients.</p>
      </div>
    </div>
    </div>
  )
}

export default About