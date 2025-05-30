import { url, Authorization } from "../../api/config";

function Films() {

 

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return <div>pelis</div>;
}

export default Films;
