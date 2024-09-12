import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  return (
    <div className="bg-[#1A1B21] text-white rounded-xl flex flex-col items-center w-[317px]">
      <img
        src="src/assets/profile_picture.png"
        className="profile-picture"
        alt="A profile picture"
        width={"317px"}
        height={"317px"}
      />
      <h1 className="font-bold text-white text-2xl mb-2 mt-2 ">Laura Smith</h1>
      <h2 className="font-thin text-[#f3be99] text-lg">
        Frontend Developer
      </h2>
      <div className="font-light">
        <a href="http://www.laurasmith.website">laurasmith.website</a>
      </div>
      <div className="w-[247px]">
        <div className="flex mt-3 justify-between mb-6">
          <button className="flex bg-white text-black items-center rounded-md w-[117px] mr-[17px] py-[9px] px-[12px]">
            <MailIcon />
            <p className="pl-[8px]">Email</p>
          </button>
          <button className="flex bg-blue-400 rounded-md w-[115px] py-[9px] px-[12px]">
            <LinkedInIcon />
            <p className="pl-[8px]">LinkedIn</p>
          </button>
        </div>
        <div className="pb-5 text-gray-100">
          <h3 className="font-bold text-xl pb-1 pt-4">About</h3>
          <div>
            <p className="text-sm">
              I am a frontend developer with a particular interest in making things
              simple and automating daily tasks. I try to keep up with security and
              best practices, and am always looking for new things to learn.
            </p>
          </div>
          <h3 className="font-bold text-xl pt-4 pb-1">Interests</h3>
          <div>
            <p className="text-sm pb-[30px]">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
      </div>
      </div>
    </div>
  );
}
