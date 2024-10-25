import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import HeaderOverlay from "./HeaderOverlay";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeader } from "../../Store/Slices/headerSlice";
import { AnimatePresence } from "framer-motion";

const MobileHeader = () => {
  const { showHeader } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  function closeOverlay() {
    dispatch(toggleHeader());
  }

  return (
    <div>
      <button
        className="text-dark-purple"
        onClick={() => dispatch(toggleHeader())}
      >
        {showHeader ? (
          <IoCloseSharp className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </button>
      <AnimatePresence>
        {showHeader && <HeaderOverlay closeOverlay={closeOverlay} />}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
