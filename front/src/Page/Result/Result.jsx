import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCars } from "../../api/getCar";
import style from "./Result.module.css";

const Result = () => {
  const params = useParams();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  const getAllCars = async () => {
    setLoader(true);
    const response = await axios("http://localhost:3001/get_info?vin=" + window.location.pathname.replace("/reports/", "")).then(
      (res) => res.data.header
    );
    setData(response);
    setLoader(false);
  };
  useEffect(() => {
    getAllCars();
  }, []);
  if (loader) return <h1>Loading</h1>;
  return (
    <div className={style.result}>
      <div className={style.container}>
        <h1 className={style.result__title}>{data[2]?.Model}</h1>
        <div className={style.result__main}>
          <span className={style.result__date}>{data[0]?.VIN}</span>
          <div className={style.result__btns}>
            <a href="#">Yuklab olish</a>
            <a href="#">Bo'lishish</a>
          </div>
        </div>
        <div className={style.result__photos}>
          <div>
            <img
              className={style.left}
              src={data[14]?.gallery[0]}
              alt=""
            />
          </div>
          <div className={style.right__main}>
            {data[14]?.gallery.map(function(object, i){
              if (i == 0) return;
              return <img
                className={style.right}
                src={object}
                alt=""
              />
            })}
          </div>
        </div>
        <div className={style.info}>
          <div className={style.infos}>
            <p>
              <span>VIN:</span>{data[0]?.VIN}
            </p>
            <p>
              <span>Davlat raqami:</span> {data[1]?.["Davlat raqami"]}
            </p>
            <p>
              <span>Dvigatel raqami:</span> {data[6]?.["Dvigatel raqami"]}
            </p>
            <p>
              <span>Markasi:</span> {data[3]?.["Markasi"]}
            </p>
            <p>
              <span>Avtomobil turi:</span> {data[7]?.["Avtomobil turi"]}
            </p>
            <p>
              <span>Yil:</span> {data[4]?.["Yil"]}
            </p>
          </div>
          <div className={style.infos}>
            <p>
              <span>Egalik soni:</span> {data[9]?.["Egalik soni"]}
            </p>
            <p>
              <span>Rangi:</span> {data[8]?.["Rangi"]}
            </p>
            <p>
              <span>YHHlar soni:</span>{data[11]?.["YHHlar soni"]}
            </p>
            <p>
              <span>Halokat turi:</span> {data[12]?.["Halokat turi"]}
            </p>
            <p>
              <span>Bosib otgan masofasi:</span> {data[10]?.["Bosib o'tgan masofasi"]}
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Result;
