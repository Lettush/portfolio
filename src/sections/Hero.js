import Avatar from "../assets/images/avatar.png"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="col">
          <img
            src={Avatar}
            alt="Jared's Image"
            className="avatar"
          />
        </div>
        <div className="col">
            <h2>Some information...</h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
