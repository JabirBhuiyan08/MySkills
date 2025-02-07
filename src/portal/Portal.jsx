import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Portal = () => {
  const [nric, setNric] = useState("");
  const [cert, setCert] = useState("");
  const [data, setData] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/myskills");
        if (response.status === 200 || response.status === 201) {
          setData(response.data); // Store fetched data in state
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [axiosPublic]);

  // Handle verification and redirect
  const handleVerify = () => {
    const filtered = data.filter(
      (item) => item.finNumber === nric && item.eCertNumber === cert
    );

    if (filtered.length > 0) {
      // Redirect to /showinfo with filtered data
      navigate("/info", { state: { verifiedData: filtered } });
    } else {
      alert("No matching e-Cert found.");
    }
  };

  const isFormValid = nric.trim() !== "" && cert.trim() !== "";

  const inputStyles = "w-full bg-[#e8f8f8] border border-gray-400 p-2";
  const buttonStyles =
    "bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600";

  return (
    <div className="m-10 flex flex-col items-center justify-start bg-white">
      <form
        className="w-full sm:max-w-5xl sm:mt-20 mt-20 space-y-6 sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-left pb-8">
          <h1 className="text-2xl sm:text-4xl pb-8 font-bold text-[#100d51]">
            Check e-Cert Validity
          </h1>
          <p className="text-sm font-semibold mt-2">Note:</p>
          <p className="text-gray-600">
            This e-service verifies WSQ certificates issued by SSG, which are
            converted to electronic certificates (e-Cert).
          </p>
          <p className="mt-4 text-gray-600">
            Please enter your NRIC/FIN/Other Identification No. and e-Cert
            Serial No. in the form below.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1">
            <label className="block font-bold pb-2 text-gray-700">
              NRIC/FIN/Other identification no.
            </label>
            <input
              type="text"
              className={inputStyles}
              placeholder="Please enter"
              value={nric}
              onChange={(e) => setNric(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block font-bold pb-2 text-gray-700">
              e-Cert serial no.
            </label>
            <input
              type="text"
              className={inputStyles}
              placeholder="Please enter"
              value={cert}
              onChange={(e) => setCert(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className={`${buttonStyles} ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isFormValid}
            onClick={handleVerify}
          >
            Verify e-Cert
          </button>
        </div>
      </form>
    </div>
  );
};

export default Portal;
