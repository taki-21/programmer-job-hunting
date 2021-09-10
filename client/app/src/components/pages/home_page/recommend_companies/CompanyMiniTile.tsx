import React from "react";
import { Box } from "@chakra-ui/react"
import { useHistory } from "react-router";

type Props = {
  data: {
    id: number;
    companyName: String;
  };
}

const CompanyMiniTile: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <Box as="button" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="White"
      onClick={() => history.push(`/detail/${props.data.id}`)}
    >

      <Box p="6">
        <Box
          as="p"
          lineHeight="tight"
        >
          会社ID：{props.data.id}
        </Box>
        <Box
          as="h3"
          fontWeight="semibold"
          lineHeight="tight"
        >
          {props.data.companyName}
        </Box>
      </Box>
    </Box>
  )
}

export default CompanyMiniTile