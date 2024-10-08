import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import App from "../App";
import {
   AdminLayout,
   SignIn,
   SignUp,
   Category,
   SubCategory,
   Brand
} from "@pages";

const Index = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="admin-layout" element={<AdminLayout />}>
               <Route path="category" element={<Category />} />
               <Route path="sub-category" element={<SubCategory />} />
               <Route path="brand" element={<Brand/>}/>
            </Route>
         </Route>
      )
   );

   return <RouterProvider router={router} />;
};

export default Index;
