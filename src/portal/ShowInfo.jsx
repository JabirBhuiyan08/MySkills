import { useLocation, useNavigate } from "react-router-dom";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import mom from "../assets/mom.png";
import dad from "../assets/dad.png";

const ShowInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifiedData } = location.state || { verifiedData: [] };

  return (
    <div className="m-5 mt-28 flex flex-col  items-center p-5">
      {verifiedData.length > 0 ? (
        <div className="w-full flex flex-col justify-center items-center sm:max-w-5xl rounded-lg p-6">
          <h1 className="text-3xl flex gap-3 items-center justify-center text-center sm:text-4xl pb-6 font-bold text-green-600">
            Verified <IoShieldCheckmarkSharp />
          </h1>

          {verifiedData.map((item, index) => (
            <div key={index} className="mb-8 bg-white p-5 rounded-lg shadow-md">
              {/* Info Section */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6">
                <div className="bg-white sm:shadow-md rounded-2xl sm:p-6 max-w-lg  sm:border">
                  <p className="text-lg font-semibold">
                    <strong>Name:</strong> {item.name}
                  </p>

                  <img
                    src={item.signetureImglink}
                    alt="Signature"
                    className="w-32 sm:w-40 mt-4 rounded-md border sm:shadow-md"
                  />

                  <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
                    <p>
                      <strong>DOB:</strong> {item.dob}
                    </p>
                    <p>
                      <strong>Gender:</strong> {item.gender}
                    </p>
                    <p>
                      <strong>Nationality:</strong> {item.nationality}
                    </p>
                    <p>
                      <strong>Passport No:</strong> {item.passportNumber}
                    </p>
                    <p>
                      <strong>e-Cert No:</strong> {item.eCertNumber}
                    </p>
                    <p>
                      <strong>FIN No:</strong> {item.finNumber}
                    </p>
                    <p>
                      <strong>Graduation:</strong> {item.graduation}
                    </p>
                    <p>
                      <strong>Subject:</strong> {item.subject}
                    </p>
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                  </div>
                </div>
                {/* Images Section */}
                <div className="flex w-20 items-center justify-center sm:w-full sm:justify-end sm:flex-row gap-4">
                  <img
                    src={item.passportImglink}
                    alt="Passport"
                    className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
                  />
                  <img
                    src={item.certificateImglink}
                    alt="Certificate"
                    className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* View Button */}
              <div className="flex justify-end mt-4">
                <label
                  htmlFor={`modal-${index}`}
                  className="btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  View Images
                </label>

                <input
                  type="checkbox"
                  id={`modal-${index}`}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={item.passportImglink}
                        alt="Passport"
                        className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
                      />
                      <img
                        src={item.certificateImglink}
                        alt="Certificate"
                        className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <label
                      className="btn btn-primary mt-4"
                      htmlFor={`modal-${index}`}
                    >
                      Close
                    </label>
                  </div>
                  <label
                    className="modal-backdrop"
                    htmlFor={`modal-${index}`}
                  ></label>
                </div>
              </div>
            </div>
          ))}

          <div className="w-32 flex gap-4 items-center justify-center">
            <img src={mom} alt="" />
            <img src={dad} alt="" />
          </div>
          {/* <button
            className="btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={() => navigate("/")}
          >
            back
          </button> */}
        </div>
      ) : (
        <p className="text-red-500 mt-6">No data to display.</p>
      )}
    </div>
  );
};

export default ShowInfo;
