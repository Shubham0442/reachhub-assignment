import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPlayerRatingHistory,
  setRatingHistoryInitial
} from "../../State/Actions/RatingHistoryActions";
import { CategoryScale } from "chart.js";
import { Button, Skeleton } from "../../Components";

Chart.register(CategoryScale);

const RatingHistory = () => {
  const { username } = useParams();
  const { isLoading, ratingHistory } = useSelector(
    (state) => state.ratingHistoryReducer
  );
  const { token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [showChart, setShowChart] = useState(false);

  const chartData = useMemo(() => {
    if (!Array.isArray(ratingHistory) || ratingHistory.length === 0) {
      return null;
    } else if (ratingHistory?.length !== 0 && showChart) {
      const labels =
        ratingHistory && ratingHistory?.map((dataPoint) => dataPoint.date);
      const data =
        ratingHistory && ratingHistory?.map((dataPoint) => dataPoint.rating);
      return {
        labels: labels,
        datasets: [
          {
            label: "Rating",
            data: data,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
          }
        ]
      };
    }
    return null;
  }, [ratingHistory, username, showChart]);

  const handleChartData = () => {
    setShowChart(!showChart);
  };

  useEffect(() => {
    if (username) dispatch(getPlayerRatingHistory(username, token));
    return () => {
      dispatch(setRatingHistoryInitial());
    };
  }, [username]);

  const options = {
    scales: {
      x: {
        type: "category"
      }
    }
  };

  return (
    <div className="w-[80%] h-auto m-auto">
      <div className="w-full h-auto m-auto">
        <div className="font-bold text-[25px] mb-4">
          Rating History of {username}
        </div>
        <div className="w-32 m-auto pb-5">
          <Button title={showChart ? "Show Table": "Show Chart"} onClick={handleChartData} />
        </div>
      </div>
      {!showChart && (
        <div className="w-full h-auto m-auto">
          <div className="w-full h-auto m-auto flex flex-col items-center justify-center">
            <div className="w-[80%] border-b h-auto m-auto flex items-center justify-between px-6 py-2 font-semibold">
              <div className="">Date</div>
              <div>Rating</div>
            </div>
            <div className="w-full m-auto flex flex-col items-center justify-center">
              {isLoading &&
                new Array(20).fill(0)?.map((_, index) => (
                  <div className="w-[80%] border-b h-auto m-auto flex items-center justify-between px-6 py-2" key={index}>
                    <Skeleton variant="table-row" />
                  </div>
                ))}
              {ratingHistory?.length !== 0 &&
                ratingHistory?.map((el, index) => (
                  <div key={el.date + index} className="w-[80%] border-b h-auto m-auto flex items-center justify-between px-6 py-2">
                    <div className="">{el?.date}</div>
                    <div>{el?.rating}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {showChart && (
        <div className="w-full">
          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default RatingHistory;
