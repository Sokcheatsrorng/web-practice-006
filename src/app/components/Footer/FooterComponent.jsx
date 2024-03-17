"use client";
import { Footer } from "flowbite-react";
import IstadLogoFooter from "../IstadLogo/IstadLogoFooter";

export default function FooterComponent() {
  return (
    <Footer container className="bg-[#253D94] rounded-none">
      <div className="w-full">
        <div className=" w-[80%] mx-auto p-0">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <IstadLogoFooter />
              <p class="school-quotes mt-3 text-white">
                Start your IT career with <br></br> CSTAD
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8  sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Learn More" className="text-white" />
                <Footer.LinkGroup col className="text-gray-100">
                  <Footer.Link href="#">Course</Footer.Link>
                  <Footer.Link href="#">IT News</Footer.Link>
                  <Footer.Link href="#">Job Opportunity</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">FQA</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact us" className="text-white" />
                <Footer.LinkGroup col className="text-gray-100">
                  <Footer.Link href="#">(+855) 95-990-910</Footer.Link>
                  <Footer.Link href="#">(+855) 93-990-910</Footer.Link>
                  <Footer.LinkGroup className="flex text-gray-100">
                    <Footer.Link>
                      {" "}
                      <i class="fa-brands fa-telegram"></i>Telegram
                    </Footer.Link>
                    <Footer.Link>Youtube</Footer.Link>
                  </Footer.LinkGroup>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" className="text-white" />
                <Footer.LinkGroup col>
                  <div
                    class="uiScaledImageContainer _2zfr" className="w-[255px] h-[130px]"
                  >
                    <img
                      className="scaledImageFitHeight img"
                      src="https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/368678344_283065197807321_642903727610062012_n.png?stp=dst-png_p296x100&amp;_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_ohc=Cdg6FItyeZIAX990yFJ&amp;_nc_zt=23&amp;_nc_ht=z-p3-scontent.fpnh5-3.fna&amp;edm=ADwHzz8EAAAA&amp;oh=00_AfC1mcOtW8qxaK1Mc-h9a-jgm18XykifeG69AyeXyTzNmQ&amp;oe=65FB70DD"
                      alt="Center of Science and Technology Advanced Development - CSTAD's photo."
                      width="296"
                      height="130"
                      style={{ left: "-20px" }}
                      caption="Center of Science and Technology Advanced Development - CSTAD's photo."
                    />
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full text-white sm:flex sm:items-center sm:justify-between">
            <p className="mx-auto">
              ©<span>2024</span>
              <span>
                Center of Science and Technology Advanced Development | All
                Rights Reserved
              </span>
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
}
