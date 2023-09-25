import React from 'react';
import './portfolio.css';
import Card from '../Ui/Card';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className='heading'>
        <h2 className='header-portfolio' style={{ color: '#eeeedd' }}>Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        <div className="card-container">
          <Card
            Title="E-mercado"
            Description="Created a user-friendly e-commerce site. Secure payments, smooth shopping, and sale functionality."
            image={<img src="emercado-image.png" alt="Home ecommerce image" />}
            Link="https://github.com/gonzabb14/workspace-inicial"
          />
          <Card
            Title="Bardo Server"
            Description="My own custom API-REST that allows users to create, read, update, and delete data from a database."
            image={<img src="API-Development-01.png" alt="" />}
            Link="https://github.com/aalandev8/bardo-server"
          />
          <Card
            Title="Bardo Client"
            Description="Frontend for my custom API. Allows users to create, read, update, and delete data from a database using a user-friendly interface."
            image={<img src="BardoClientImage.png" alt="" />}
            Link="https://github.com/aalandev8/bardo-client"
          />
          <Card
            Title="Portfolio"
            Description="This portfolio was created using React, Next.js, and NextUI. It is a responsive website that can be viewed on any device."
            image={<img src="portfolio-image.jpg" alt="Portfolio image" />}
            Link="https://github.com/aalandev8/PersonalPortfolio"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
