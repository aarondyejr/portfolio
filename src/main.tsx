import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from '@/routes/home';
import Header from "@/components/header/Header.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Index,
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={"h-screen grid grid-rows-[auto_1fr_auto]"}>
      <div className={"flex justify-center p-0 md:p-4"}>
        <Header />
      </div>
      <main className={"p-4 space-y-4"}>
        <RouterProvider router={router}/>
      </main>
    </div>
  </StrictMode>,
)
