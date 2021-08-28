import React from "react";
import { Input } from "@chakra-ui/input";
import { Box, Link, Text } from "@chakra-ui/layout";

const SearchCompanyBox: React.FC = () => {

  return (
    <>
      <Box as="div" marginTop="5" p="10" bg="blue.200" borderRadius="lg">
        <Box as="h6" m="3">会社を探す</Box>
        <Input variant="filled" placeholder="Filled" m="3" />
        <Text textAlign="right">
          <Link href="/search">
            すべての会社から探す→
          </Link>
        </Text>
      </Box>
    </>

  )
}

export default SearchCompanyBox