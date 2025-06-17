"use client";

import { FC, ReactNode } from "react";

import { Navbar, Sidebar } from "@/components/back-office";

const BackOfficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <Sidebar />

        <Navbar />

        <main className="absolute top-14 lg:top-[60px] w-[100%] md:w-[calc(100%-220px)] lg:w-[calc(100%-280px)] md:ml-[220px] lg:ml-[280px] flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </>
  );
};

export default BackOfficeLayout;

{
  /* <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader></SidebarHeader>

          <SidebarContent></SidebarContent>

          <SidebarFooter></SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="h-16 shrink-0 flex items-center gap-2  transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />

              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
          </header>

          <main className="flex flex-col flex-1 gap-4 p-4 pt-0"></main>
        </SidebarInset>
      </SidebarProvider> */
}
