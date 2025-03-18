import React from "react";

import Header from "@/components/header/header";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
