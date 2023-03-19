import React from 'react';

class AboutUs extends React.Component {
  componentDidMount(): void {
    document.title = `About | React-store`;
  }
  render(): React.ReactNode {
    return (
      <div className="about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt obcaecati
          amet esse deserunt aperiam dolorum? Facere doloribus minus velit. Ea velit laudantium ex
          aspernatur deserunt fuga ipsam optio saepe?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt obcaecati
          amet esse deserunt aperiam dolorum? Facere doloribus minus velit. Ea velit laudantium ex
          aspernatur deserunt fuga ipsam optio saepe?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt obcaecati
          amet esse deserunt aperiam dolorum? Facere doloribus minus velit. Ea velit laudantium ex
          aspernatur deserunt fuga ipsam optio saepe?
        </p>
      </div>
    );
  }
}

export default AboutUs;
