import AdminDashboard from "@/app/components/AdminDashboard/AdminDashboard";
import pb from "@/app/lib/pocketbase";

export default async function Page() {
  const users = await pb.collection("users").getFullList({
    sort: "+email",
  });
  console.log(users);

  return (
    <>
      <AdminDashboard users={users} />
    </>
  );
}
