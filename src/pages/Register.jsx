import { useState } from "react";
import { FormCheckbox, FormInput } from "../components";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [country, setCountry] = useState("");
  const [tel, setTel] = useState("");

  return (
    <div>
      {/* banner */}

      {/* Register Form */}
      <div className="py-24">
        <div className="container">
          <div className="text-center space-y-4">
            <h2 className="font-bold font-pt text-4xl">Register To Attend</h2>

            <h6 className="text-grey">
              It is a long established fact that a reader will be distracted{" "}
              <br />
              content of a page when looking.
            </h6>
          </div>

          <form action="" className="md:w-5/6 mt-24 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 gap-y-8">
              <FormInput placeholder="First Name" type="text" />
              <FormInput placeholder="Last Name" type="text" />
              <FormInput placeholder="Email" type="email" />
              <FormInput placeholder="Phone number" type="number" />
              <FormInput placeholder="date" type="date" />
              <FormInput placeholder="Employer" />
              <FormInput placeholder="Allergies (if any)" />
              {/* country select */}
              <div className="outline-none border flex items-center px-4 country-dropdown">
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </div>

              <div>
                <PhoneInput
                  country={"us"}
                  value={tel}
                  onChange={(phone) => setTel({ phone })}
                />
              </div>

              <input type="file" name="" id="" />

              {/* hotel accomodation */}
              <FormCheckbox
                label="Hotel accomodation for 4 nights"
                isChecked={true}
              />

              <FormCheckbox label="NICCRA side event" isChecked={true} />

              {/* file upload passport */}

              <span className=" text-sm md:col-span-2 text-gray-400">
                Please be informed that all personal details entered will be
                protected according to the EU GDPR and UK Data Protection Act
              </span>

              <div className="md:col-span-2 flex justify-center">
                <button className="p-5 px-6 text-white bg-secondary flex gap-3">
                  <span>Submit</span>
                  {/* Icon */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
