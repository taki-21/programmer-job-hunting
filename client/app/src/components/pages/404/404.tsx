import React from "react";
import { Typography } from "@material-ui/core";
import { RouteComponentProps } from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{ companyId: string }>;

const NotFound: React.FC<PageProps> = props => {

  return (
    <>
      <Typography variant="h3" gutterBottom>
        NOT FOUND 404
      </Typography>
      <Typography variant="body1" gutterBottom>
        お探しのページは見つかりませんでした。
      </Typography>
    </>
  )
}

export default NotFound