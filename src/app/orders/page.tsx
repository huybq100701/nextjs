
import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/api-requests";
import { cookies } from "next/headers";
import { AuthPageInvisible } from "@/lib/protect-page";
import OrdersForm from "./orders-form";

export default async function OrdersPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const user = await apiGetAuthUser(token?.value);

  return (
    <>
      <Header />
      <section className="  pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Orders Page
            </p>
            <div className="mt-8">
             
            </div>
          </div>
        </div>
      </section>
      <AuthPageInvisible />
      <OrdersForm/>
    </>
  );
}
