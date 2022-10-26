import { useLocation, useParams } from "react-router-dom";
import DetailStyle from "./newsdetail.module.css";

const NewsDetails = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  const { title } = useParams();
  console.log(title);
  console.log();
  const {
    item_type,
    multimedia,
    url,
    subsection,
    section,
    abstract,
    byline,
    created_date,
  } = detail;
  console.log(multimedia[0].url);
  return (
    <div className={DetailStyle.container}>
      {/* <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-body"> */}
      <h5>{title}</h5>
      <div>
        <p className={DetailStyle.textp}>
          <span>Section : </span>
          <span className>{section.toUpperCase()}</span>
        </p>
        <p className={DetailStyle.textp}>
          <span>Subsection : </span>
          <span className>{subsection.toUpperCase()}</span>
        </p>
        <p className={DetailStyle.textp}>
          <span>Type : </span>
          <span className>{item_type.toUpperCase()}</span>
        </p>
      </div>
      <img src={multimedia[0].url} className={DetailStyle.image} alt={title} />
      <div className={DetailStyle.abstract}>
        <span>Abstract : </span>
        <span>{abstract}</span>
      </div>
      <a href={url} target="_blank" className={DetailStyle.link}>
        Details
      </a>
      <p>
        <span>Author : </span>
        <span className>{byline}</span>
      </p>
      <p>
        <span>Date : </span>
        <span className>{created_date.substring(0, 10)}</span>
      </p>
      {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default NewsDetails;
