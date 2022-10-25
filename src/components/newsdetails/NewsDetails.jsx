import { useLocation, useParams } from "react-router-dom";
import "./newsdetail.module.css";

const NewsDetails = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  const { title } = useParams();
  console.log(title);
  console.log();
  const { item_type, multimedia, url, subsection, section, abstract, byline, created_date } = detail;
  console.log(multimedia[0].url);
  return (
    <div className="container-fluid mt-4">
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <li className="list-group-item">
              <p>
                <span>Section : </span>
                <span className>{section.toUpperCase()}</span>
              </p>
              <p>
                <span>Subsection : </span>
                <span className>{subsection.toUpperCase()}</span>
              </p>
              <p>
                <span>Type : </span>
                <span className>{item_type.toUpperCase()}</span>
              </p>
            </li>
            <img src={multimedia[0].url} className="card-img-top" alt={title} />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>Abstract : </span>
                <span>{abstract}</span>
              </li>
            </ul>
            <a href={url} target="_blank" className="btn btn-danger">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
