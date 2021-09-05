import { Box } from "@chakra-ui/layout";
import { Typography, ListItem } from "@material-ui/core";
import { Company } from "interfaces";
import React from "react";
import { Link } from "react-router-dom";


type Props = {
  data: Company
}

const CompanyCard: React.FC<Props> = (props) => {

  return (
    <ListItem alignItems="flex-start">
      <Box bg="White" borderRadius="lg" p="5">
        <Link to={`/detail/${props.data.id}`}>{props.data.companyName}</Link>

        <Typography
          component="span"
          variant="body2"
          color="textPrimary"
        >
          従業員：{props.data.companyNumOfEmp}人
        </Typography>

      </Box>
    </ListItem>
  )
}

export default CompanyCard