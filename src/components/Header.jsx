import { Box, Text } from "@radix-ui/themes";

function Header() {
  return (
    <header className="bg-headerBackground w-full min-h-10 flex items-center p-1">
      <Box className="border border-white p-2 !flex gap-1 !items-center">
        <Text
          as="p"
          className="font-serif text-white text-2xl bg-buttonBackground p-1"
        >
          Demo
        </Text>
        <Text as="p" className="font-serif text-white text-2xl p-1">
          Store
        </Text>
      </Box>
    </header>
  );
}

export default Header;
