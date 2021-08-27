import React from "react";
import { Box } from "@chakra-ui/react"

type Props = {
  data: {
    id: number;
    companyName: string;
  };
}

const CompanyTile: React.FC<Props> = (props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="White">

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

export default CompanyTile