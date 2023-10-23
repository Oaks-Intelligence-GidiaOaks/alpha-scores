const Partners = () => {
  const PartnerCard = ({ img }) => (
    <div className="p-6 border w-52 rounded-md">
      <img src={img} className="w-full " alt="" />
    </div>
  );

  return (
    <div className="py-24 container">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-pt font-bold">We Work With Top Brands</h2>
        <h3 className="text-secondary  font-roboto">
          We continue to forge strategic partnerships that enable us to advance
          and scale our offerings.
        </h3>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-0  lg:grid-cols-4 place-items-center gap-0">
        <PartnerCard img="https://www.oaksintelligence.co/_next/static/media/oaks-logo-dark.0ed9c30c.svg" />
        <PartnerCard img="https://www.escrow-tech.co.uk/assets/img/partner2.png" />
        <PartnerCard img="https://www.escrow-tech.co.uk/assets/img/partner3.png" />
        <PartnerCard img="./images/escrow-logo.png" />
      </div>
    </div>
  );
};

export default Partners;
