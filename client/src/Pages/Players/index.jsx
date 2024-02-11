import React, { useEffect } from "react";
import { Button, Navbar, Skeleton } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { getTopPlayers } from "../../State/Actions/PlayersActions";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { downloadRatingHistory } from "../../State/Actions/RatingHistoryActions";


const Players = () => {
  const { topPlayers, isLoading, isError } = useSelector(
    (state) => state.playersReducer
  );
  const { token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTopPlayers(token));
  }, []);

  const handleDownloadCSV = () => {
    dispatch(downloadRatingHistory(token)).then((res) => {
      if (res?.type === "DOWNLOAD_RATING_HISTORY_SUCCESS") {
        const blob = new Blob([res?.payload], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "filename.csv");

        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }
    });
  };

  return (
    <div className="w-full h-auto relative">
      <div className="w-full fixed top-0 z-10 bg-[#fff] border-b">
        <Navbar />
      </div>
      <div className="h-auto w-[90%] m-auto">
        <div className="w-full text-[25px] text-center font-bold mt-20">
          <div>Top Players</div>
          <div className="w-64 m-auto mt-4">
            <Button
              title="Download Rating History CSV"
              onClick={handleDownloadCSV}
            />
          </div>
        </div>
        {isLoading && (
          <div className="w-full h-auto flex items-center justify-center gap-5 m-auto flex-wrap">
            {new Array(16).fill(0).map((_, index) => (
              <div key={index}>
                <Skeleton />
              </div>
            ))}
          </div>
        )}
        {!isLoading && !isError && topPlayers?.length !== 0 && (
          <div className="w-full h-auto flex items-center justify-center gap-5 mt-10 flex-wrap m-auto">
            {topPlayers?.map((el) => (
              <div
                className="w-64 h-auto  rounded shadow p-6 border border-[#cac8c8]"
                key={el.username}
              >
                <div className="w-full m-auto flex flex-col items-center justify-center">
                  <div>
                    <FaUserTie fontSize="40px" />
                  </div>
                  <div className="font-semibold text-base">{el.username}</div>
                </div>
                <div className="w-full h-auto flex items-center justify-center mt-4 gap-4">
                  <div className="w-40">
                    <Button
                      title="Get Rating History"
                      bg="#fff"
                      color="#545454"
                      variant="outlined"
                      onClick={() => navigate(`/${el.username}`)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
