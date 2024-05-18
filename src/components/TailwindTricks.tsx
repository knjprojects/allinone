"use client";
import React, { useState } from "react";

type Props = {};

const TailwindTricks = (props: Props) => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [swich, setSwich]: any = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Perform any additional actions based on the selected value
    console.log("Selected option:", selectedValue);
  };
  return (
    <div className="items-center">
      <div>
        <p>This is the tailwind basics</p>
        <div>
          {/**below we are showing how to change styles of children when hovering over parent wiuth group and also changing p[eer color using peer] */}
          <div className="grid items center bg-blue-500 group h-20 w-20">
            <div className="h-3 w-5 group-hover:bg-red-400 bg-black"></div>
            <div className="h-2 w-5 bg-black"></div>
          </div>
          <div className="grid h-20 w-20 bg-green-400 peer-hover:bg-orange-500 transition-colrs duration-300 ease-in-out delay-300">
            <div className="w-4 h-3 animate-marquee"></div>
          </div>
          <label htmlFor="options">Select an option:</label>
          <select id="options" onChange={handleSelectChange}>
            {/* Map each string in the options array to an <option> element */}
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex w-full items-center">
            <div className="rounded-lg w-20 h-10 shadow-[0_0_10px_purple]"></div>
            <div className="rounded-lg w-20 h-10 shadow-[0_0_10px_theme('colors.purple.700')]"></div>
            <div className="rounded-lg w-20 h-10 shadow-neon"></div>
            <div className="rounded-lg w-20 h-10 neon-purple"></div>
            {/*check extend in tailwindconfig, to be able to change the color of our neon shadow, we create our own custom tailwind plugin */}
          </div>
        </div>
      </div>
      <div>
        <p>This is the rest of DAISYUI Components using tailwind as a base.</p>
        <div>
          <p>Below are buttons</p>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <button className="btn btn-outline btn-info">Info</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          <button className="btn btn-outline btn-error">Error</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Responsive
          </button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn glass">Glass button</button>
          <div className="flex flex-row">
            <a role="button" className="btn">
              Link
            </a>
            <button type="submit" className="btn">
              Button
            </button>
            <input type="button" value="Input" className="btn" />
            <input type="submit" value="Submit" className="btn" />
            <input type="radio" aria-label="Radio" className="btn" />
            <input type="checkbox" aria-label="Checkbox" className="btn" />
            <input type="reset" value="Reset" className="btn" />
            <button className="btn" disabled={true}>
              Disabled using attribute
            </button>
            <button
              className="btn btn-disabled"
              tabIndex={-1}
              role="button"
              aria-disabled="true"
            >
              Disabled using class name
            </button>
          </div>
          <div className="flex flex-row">
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="btn btn-square btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-row">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Button
            </button>
            <button className="btn no-animation">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          </div>
        </div>
        <p className="pt-12">
          Now we are going to look at dropdown componenets
        </p>
        <div>
          <p>Below is a dropdown menu using the details tag</p>
          <details className="dropdown">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          <p>
            The below dropdown doesnt't use button because of a safari bug
            wsomwe have a workarund by calling the button class in role
          </p>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <h3 className="card-title">Card title!</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Hover
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="navbar bg-base-300 rounded-box">
            <div className="flex-1 px-2 lg:flex-none">
              <a className="text-lg font-bold">daisyUI</a>
            </div>
            <div className="flex justify-end flex-1 px-2">
              <div className="flex items-stretch">
                <a className="btn btn-ghost rounded-btn">Button</a>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost rounded-btn"
                  >
                    Dropdown
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          A normal text and a helper dropdown
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost btn-xs text-info"
            >
              <svg
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div
              tabIndex={0}
              className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
            >
              <div tabIndex={0} className="card-body">
                <h2 className="card-title">You needed more info?</h2>
                <p>Here is a description!</p>
              </div>
            </div>
          </div>
        </div>
        <p>{`Below, we are going to take a look at Modals/Popups. Using <dialog> element: It needs JS to open but it has better accessibility and we can close it using Esc key
Using a hidden <input type="checkbox"> and <label> to check/uncheck the checkbox and open/close the modal
Using <a> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter. I am only using the recommended dialog option`}</p>
        <div>
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_1"
              ) as HTMLDialogElement | null;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            open modal
          </button>

          <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_2"
              ) as HTMLDialogElement | null;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            open modal
          </button>

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <p>
          Ok, now let's look at swaps, a kind of toggle, to swap between two
          states, used fore hamburger menus, day/night shift like below
        </p>
        <div>
          <label className="swap swap-flip text-9xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <label className="swap">
            <input type="checkbox" />
            <div className="swap-on">ON</div>
            <div className="swap-off">OFF</div>
          </label>
        </div>
        <p className="pt-24">
          There is a powerful theme controller for our daisyui components. Let's
          explore some ways of designing and implementing, using swaps,
          checkbox, and dropdowns
        </p>
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <input
            type="checkbox"
            value="synthwave"
            className="checkbox theme-controller"
          />
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg
                width="12px"
                height="12px"
                className="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Retro"
                  value="retro"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Valentine"
                  value="valentine"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Aqua"
                  value="aqua"
                />
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-24">
          Ok, let's, now look at ways of using avatars, with masks and
          rounded-xl etc{" "}
        </p>
        <div>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mask mask-hexagon">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mask mask-triangle">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar online">
              <div className="w-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar offline">
              <div className="w-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-16">
          Ok, let's see how we can use badges and cards. the last one is screen
          responsive
        </p>
        <div>
          <button className="btn">
            Inbox
            <div className="badge">+99</div>
          </button>
          <button className="btn">
            Inbox
            <div className="badge badge-secondary">+99</div>
          </button>
          <div className="card w-96 glass">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <p>Ok, now, l;et's look at my favorurite, CAROUSELS!!</p>
        <div>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
          </div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="carousel rounded-box w-96">
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="w-full"
              />
            </div>
          </div>
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
            </div>
          </div>
        </div>
        <p className="pt-16">
          Here is a quick stack and maybe some other stuff
        </p>
        <div></div>
        <p className="pt-16">
          Here we will take a look at some joins, which allows elements to be
          seen as grouped together, great for navbar and other representations,
          can be used with buttons, radios and search components
        </p>
        <div>
          <div className="join join-vertical lg:join-horizontal">
            <button className="btn join-item">Button</button>
            <button className="btn join-item">Button</button>
            <button className="btn join-item">Button</button>
          </div>
          <div className="join">
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 1"
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 2"
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 3"
            />
          </div>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        <p className="pt-16">
          Here we can take a look at MASKS. perfect for showing any part of aj
          image or art concept. Let's take a look at how images look within
          different mask shapes.
        </p>
        <div>
          <img
            className="mask mask-squircle"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-heart"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-hexagon"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-hexagon-2"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-decagon"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-pentagon"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-diamond"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-square"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-circle"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-parallelogram"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-parallelogram-2"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-parallelogram-3"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-parallelogram-4"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-star"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-star-2"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-triangle"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-triangle-2"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-triangle-3"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <img
            className="mask mask-triangle-4"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default TailwindTricks;
