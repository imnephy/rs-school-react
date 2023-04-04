import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = `About | Online-store`;
  }, []);
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
};

export default About;
