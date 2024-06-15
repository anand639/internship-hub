import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
/* import { Icon } from "@iconify/react"; */
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <nav className="bg-blue-600 h-[72px] px-4 flex justify-between items-center">
      <div className="text-white flex items-center font-bold text-lg">
        <Link to="/">Internship Portal</Link>
      </div>
      <div className="flex space-x-4">
        <Link
          className="text-white flex items-center hover:bg-blue-700 px-3 py-2 rounded"
          to="/"
        >
          Opportunities
        </Link>
        {auth.token ? (
          <>
            <div className="text-white flex items-center hover:bg-blue-700 px-3 gap-1  rounded">
              {/* <div>
                <Icon icon="ei:user" width="48" height="48" color="#828282" />
              </div> */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="gap-1 flex items-center justify-center">
                    <div className="bg-gray-800 relative flex rounded-full  items-center text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>

                    <div>{auth?.user?.username}</div>
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="/my-applications"
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          My Applications
                        </Link>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ focus }) => (
                        <button
                          onClick={logout}
                          className={classNames(
                            focus ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <Link
              className="text-white hover:bg-blue-700 px-3 py-2 rounded"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-white hover:bg-blue-700 px-3 py-2 rounded"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
