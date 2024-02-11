import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/Actions/AuthActions";
import { Bounce, toast } from "react-toastify";
import { FaChess, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, isAuth } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
    navigate("/login");
  };

  return (
    <div className="navbar w-[80%] h-20 flex items-center justify-between px-4 m-auto bg-[#fff]">
      <div className="font-bold text-[25px]">
        <div className="flex items-center justify-start gap-4">
          <FaChess fontSize="42px" />
          <div className="text-[#4f46e5] text-4xl">Chess Point</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        {isAuth && (
          <div className="flex items-center justify-end gap-2 text-base font-bold">
            <FaUserCircle fontSize="25px" />
            <p>{userData?.firstname}</p>
          </div>
        )}
        <div className="w-28">
          <Button onClick={handleLogout} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
