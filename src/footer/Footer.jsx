import education from "../assets/education.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-[#100d51] text-base text-white w-full px-4 py-6 md:p-8">
      <div className=" space-y-6">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-bold">MY SKILLS.SG</h2>
          <p className="mt-2 text-lg">
            MY SKILLS.SG is a one-stop portal to support Singaporeans in their
            lifelong learning journey. Individuals can discover training
            opportunities, submit SkillsFuture Credit claims, and more.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 font-bold">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Related Sites
          </a>
        </div>

        {/* Association Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-6 py-2">
          <span className="text-lg">In association with:</span>
          <img
            src={education}
            alt="Ministry of Education Singapore"
            className="w-24 sm:w-40 sm:text-blue-400"
          />
          <span className="text-lg">MY SKILLS.SG</span>
          <span className="text-lg">An initiative of: MY SKILLS.SG</span>
        </div>

        {/* Footer Links Section */}
        <div className="w-full mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="hover:underline flex items-center gap-1">
              Report Vulnerability <HiArrowTopRightOnSquare />
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Supported Browsers
            </a>
          </div>

          {/* Align these links to the right only for sm and larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 sm:ml-auto">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Feedback
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              REACH
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row-reverse  sm:text-right gap-5 sm:gap-10 mt-6">
          <div className="text-lg">Last Updated 03 Feb 2025</div>
          <div className="text-lg">&copy; 2024 Government of Singapore</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
