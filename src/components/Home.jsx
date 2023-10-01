/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import homeImage from "../Images/home.png";
import style from "../Images/style.png";
import Omaah from "../Images/Omaah.jpeg";
import Assistant from "../components/Assistant";



const HomePage = () => {
  const showAssistant = () => {
    setAssistantVisible(!assistantVisible);
  };

  const [assistantVisible, setAssistantVisible] = useState(false);
  return (
    <div className="bg-black text-white relative">
      <div className="upper_section animated animate__backInUp">
        <div className="nav flex justify-around">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-layers"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.464 1.47a.5.5 0 0 0-.5.5v11.12l4-2.286v-8.67a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v8.67l-4 2.286V1.97a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v11.117a.5.5 0 0 0 .768.42L8 9.72l5.768 3.267a.5.5 0 0 0 .768-.42V2.47a.5.5 0 0 0-.5-.5z"
              />
            </svg>
          </div>
          <ul className="flex">
            <li className="mr-8">Home</li>
            <li className="mr-8">FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="home flex flex-col items-center">
          <img src={homeImage} alt="" className="w-3/5" />
          <div className="h2">
            <h4 className="text-center">
              All your Files in one Location, accessible anywhere.
            </h4>
          </div>
          <p className="w-1/2 text-center">
            Filo stores all your important files in one secure location. Access
            them whenever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <button className="border-none w-32 h-9 rounded-2xl text-white bg-gradient-to-br from-cyan-500 to-cyan-300 hover:bg-cyan-600 transform hover:scale-110 transition duration-200">
            Get started
          </button>
        </div>
      </div>
      <div className="list bg-black flex justify-center pt-20 items-center flex-wrap">
        <div className="card bg-black m-4 w-72 text-center">
          <div className="icon text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-layers-half"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"
              />
            </svg>
          </div>
          <h4 className="text-white">Access your files anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            files anytime and anywhere.
          </p>
        </div>
        <div className="card bg-black m-4 w-72 text-center">
          <div className="icon text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-building"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"
              />
            </svg>
          </div>
          <h4 className="text-white">Access your files anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            files anytime and anywhere.
          </p>
        </div>
        <div className="card bg-black m-4 w-72 text-center">
          <div className="icon text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-bookmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
              />
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zm0-2h1v1h-1V3z" />
            </svg>
          </div>
          <h4 className="text-white">Access your files anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            files anytime and anywhere.
          </p>
        </div>
        <div className="card bg-black m-4 w-72 text-center">
          <div className="icon text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-box-seam"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          </div>
          <h4 className="text-white">Access your files anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            files anytime and anywhere.
          </p>
        </div>
      </div>
      <section
        id="third"
        className="flex justify-center items-center flex-wrap"
      >
        <img src={style} alt="" className="w-2/5" />
        <div className="text w-2/5">
          <h2>Stay productive, wherever you are.</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            covered for all of your storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family, and
            colleagues for collaboration. No email attachments required.
          </p>
          <div className="textbtn text-cyan-500 border-b-2 border-cyan-500 pb-2 w-max">
            See how Fylo works
          </div>
        </div>
      </section>
      <section
        id="end"
        className="flex justify-center items-center flex-wrap pt-10"
      >
        <div className="cardEnd p-4 m-2 w-72 bg-dark-blue">
          <p>
            Fylo has improved our team's productivity by an order of magnitude
            since using it. Our team has become a well-oiled collaborative
            machine.
          </p>
          <div className="imageText flex items-center">
            <img
              src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="smallText">
              <h4>Eline Paul</h4>
              Product Designer
            </div>
          </div>
        </div>
        <div className="cardEnd p-4 m-2 w-72 bg-dark-blue">
          <p>
            Fylo has improved our team's productivity by an order of magnitude
            since using it. Our team has become a well-oiled collaborative
            machine.
          </p>
          <div className="imageText flex items-center">
            <img src={Omaah} alt="" className="w-12 h-12 rounded-full mr-4" />
            <div className="smallText">
              <h5>Abdulrasheed Ummkhalad</h5>
              Software Developer
            </div>
          </div>
        </div>
        <div className="cardEnd p-4 m-2 w-72 bg-dark-blue">
          <p>
            Fylo has improved our team's productivity by an order of magnitude
            since using it. Our team has become a well-oiled collaborative
            machine.
          </p>
          <div className="imageText flex items-center">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="smallText">
              <h3>Alex Jemina</h3>
              Writer
            </div>
          </div>
        </div>
      </section>
      <div id="accessKey" className="w-4/5 mx-auto p-4 bg-dark-blue rounded-lg">
        <h3>Get early access today</h3>
        <p>
          It only takes a few minutes to start, and our free starter is
          extremely generous. If you have any questions, our support team should
          be happy to help you.
        </p>
        <div className="sign flex items-center">
          <input
            type="email"
            placeholder="example@gmail.com"
            name=""
            className="w-3/5 rounded-md p-2 mr-2"
          />
          <button className="h-9 w-36 bg-gradient-to-br from-cyan-500 to-cyan-300 rounded-md hover:bg-cyan-600 text-white transform hover:scale-110 transition duration-200">
            Get started for free
          </button>
        </div>
      </div>
      <div
        id="footer"
        className="z-0 bg-black h-40 flex justify-center items-center"
      >
        <div className="imageLogo flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-layers text-cyan-500"
            viewBox="0 0 16 16"
          >
            <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
          </svg>
          <h4>Fylo</h4>
        </div>
        <div className="links flex">
          <ul className="listFooter mr-14">
            <li className="text-cyan-500">About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="listFooter mr-14">
            <li className="text-cyan-500">Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className="listFooter">
            <li className="text-cyan-500">Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="">
          <button
            onClick={() => setAssistantVisible(!assistantVisible)} // Toggle the visibility
            className="border-none w-32 h-9 rounded-2xl text-white bg-gradient-to-br from-cyan-500 to-cyan-300 hover:bg-cyan-600 transform hover:scale-110 transition duration-200"
          >
            Toggle Assistant
          </button>

          {/* Render the Assistant component based on assistantVisible state */}
          {assistantVisible && <Assistant isVisible={assistantVisible} />}
        </div>
      </div>
      <Assistant />
    </div>
  );
};

export default HomePage;
