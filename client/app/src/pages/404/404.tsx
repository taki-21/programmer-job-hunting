import React from "react";
import { Typography } from "@material-ui/core";
import notFoundImage from "images/notfound.png";

const NotFound: React.FC = () => {

  return (
    <>
      <Typography variant="h3" gutterBottom>
        NOT FOUND 404
      </Typography>
      <Typography variant="body1" gutterBottom>
        お探しのページは見つかりませんでした。
      </Typography>
      <img
        src={notFoundImage}
        alt="404 "
      />
    </>
  )
}

export default NotFound